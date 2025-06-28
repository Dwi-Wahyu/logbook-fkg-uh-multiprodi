// src/app/_lib/actions/kegiatanActions.ts
"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import {
  handlePrismaUniqueViolation,
  validateServerActionPayload,
} from "@/lib/validateServerActionPayload";
import { join } from "path";
import { unlinkSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { generateSafeFilename } from "@/hooks/use-safe-filename";

import {
  tambahKegiatanSchema,
  TTambahKegiatan,
} from "@/schema/kegiatan/TambahKegiatanSchema";
import { createNotifikasi } from "./notifikasiAction";
import {
  editKegiatanSchema,
  TEditKegiatan,
  TUpdateStatusKegiatan,
  updateStatusKegiatanSchema,
} from "@/schema/kegiatan/UpdateKegiatanSchema";

const UPLOAD_DIR = join(process.cwd(), "public/uploads/kegiatan-lampiran");

// Pastikan direktori upload ada
if (!existsSync(UPLOAD_DIR)) {
  mkdirSync(UPLOAD_DIR, { recursive: true });
}

// Helper untuk menghapus file lampiran
async function deleteKegiatanLampiranFile(lampiranId: string) {
  const lampiran = await prisma.lampiran.findUnique({
    where: { id: lampiranId },
  });

  if (lampiran?.namaFile) {
    const filePath = join(UPLOAD_DIR, lampiran.namaFile);
    if (existsSync(filePath)) {
      unlinkSync(filePath);
    }
  }
}

export async function tambahKegiatan(payload: TTambahKegiatan) {
  const { data, error } = await validateServerActionPayload(
    payload,
    tambahKegiatanSchema
  );

  if (error) {
    return error;
  }
  if (!data) {
    return { success: false, message: "Data tidak valid." };
  }

  // Hapus 'tanggal' dari destructuring, karena sekarang ada di fieldsData
  const { mata_kuliahId, pengajuId, lampiran, status, fieldsData } = data;

  try {
    const mahasiswa = await prisma.mahasiswa.findUnique({
      where: { penggunaId: pengajuId },
      select: { id: true },
    });

    if (!mahasiswa) {
      return { success: false, message: "Pengaju bukan seorang Mahasiswa." };
    }

    let logbook = await prisma.logbook.findFirst({
      where: { mahasiswaId: mahasiswa.id },
    });

    if (!logbook) {
      logbook = await prisma.logbook.create({
        data: {
          mahasiswaId: mahasiswa.id,
          penggunaId: pengajuId,
        },
      });
    }

    // --- Validasi fieldsData (Penting!) ---
    // Pastikan Anda mendapatkan ProgramStudiId dari MataKuliah yang dipilih
    const mataKuliah = await prisma.mataKuliah.findUnique({
      where: { id: parseInt(mata_kuliahId) },
      select: { programStudiId: true },
    });

    if (!mataKuliah?.programStudiId) {
      return {
        success: false,
        message: "Mata Kuliah tidak terhubung dengan Program Studi yang valid.",
      };
    }

    const programStudiFields = await prisma.programStudiField.findMany({
      where: { programStudiId: mataKuliah.programStudiId },
    });

    for (const fieldDef of programStudiFields) {
      const value = fieldsData[fieldDef.fieldName];

      if (
        fieldDef.isRequired &&
        (value === undefined ||
          value === null ||
          (typeof value === "string" && value.trim() === ""))
      ) {
        return {
          success: false,
          message: `Field '${fieldDef.fieldName}' wajib diisi.`,
        };
      }

      if (value !== undefined && value !== null && value !== "") {
        // Hanya validasi jika ada nilai
        if (fieldDef.fieldType === "NUMBER") {
          if (isNaN(Number(value))) {
            // Gunakan Number() untuk memastikan konversi aman
            return {
              success: false,
              message: `Field '${fieldDef.fieldName}' harus berupa angka.`,
            };
          }
        } else if (fieldDef.fieldType === "DATE") {
          if (isNaN(new Date(value).getTime())) {
            return {
              success: false,
              message: `Field '${fieldDef.fieldName}' harus berupa tanggal yang valid.`,
            };
          }
        }
        // Tambahkan validasi tipe lain jika diperlukan
      }
    }
    // --- Akhir Validasi fieldsData ---

    const newKegiatan = await prisma.kegiatan.create({
      data: {
        // Hapus tanggalMulai dan tanggalSelesai di sini
        // tanggalMulai: tanggal.from,
        // tanggalSelesai: tanggal.to,
        mataKuliahId: parseInt(mata_kuliahId),
        logbookId: logbook.id,
        status: status || "DIAJUKAN",
        fieldsData: fieldsData, // Simpan fieldsData di sini
      },
    });

    if (lampiran && lampiran.length > 0) {
      const lampiranData = await Promise.all(
        lampiran.map(async (file) => {
          const bytes = await file.arrayBuffer();
          const buffer = Buffer.from(bytes);
          const filename = generateSafeFilename(file.name);
          const uploadPath = join(UPLOAD_DIR, filename);

          writeFileSync(uploadPath, buffer);

          return {
            namaFile: filename,
            url: `/uploads/kegiatan-lampiran/${filename}`,
          };
        })
      );

      await prisma.lampiran.createMany({
        data: lampiranData.map((data) => ({
          ...data,
          kegiatanId: newKegiatan.id,
        })),
      });
    }

    revalidatePath("/admin/kegiatan");
    revalidatePath(`/admin/kegiatan/detail/${newKegiatan.id}`);

    // Mendapatkan judul kegiatan dari fieldsData untuk notifikasi
    // Asumsi ada field 'judul' di fieldsData yang dikirim dari form
    const judulKegiatanFromFields =
      (fieldsData as any)?.judul || "Kegiatan Baru";

    createNotifikasi({
      judul: "Pengajuan Kegiatan Baru",
      penggunaId: "ID_ADMIN_ATAU_DOSEN_TERKAIT", // Ganti dengan logika mendapatkan ID yang relevan
      pesan: `Mahasiswa ${pengajuId} mengajukan kegiatan "${judulKegiatanFromFields}". Mohon direview.`,
    });

    return { success: true, data: newKegiatan };
  } catch (error) {
    console.error("Error adding kegiatan:", error);
    return {
      success: false,
      message:
        "Gagal menambahkan kegiatan. " +
        (error instanceof Error ? error.message : String(error)),
    };
  }
}

export async function editKegiatan(payload: TEditKegiatan) {
  const { data, error } = await validateServerActionPayload(
    payload,
    editKegiatanSchema
  );

  if (error) {
    return error;
  }
  if (!data) {
    return { success: false, message: "Data tidak valid." };
  }

  // Hapus 'tanggal' dari destructuring
  const { id, mata_kuliahId, status, fieldsData } = data;

  try {
    // --- Validasi fieldsData (Penting!) ---
    const mataKuliah = await prisma.mataKuliah.findUnique({
      where: { id: parseInt(mata_kuliahId) },
      select: { programStudiId: true },
    });

    if (!mataKuliah?.programStudiId) {
      return {
        success: false,
        message: "Mata Kuliah tidak terhubung dengan Program Studi yang valid.",
      };
    }

    const programStudiFields = await prisma.programStudiField.findMany({
      where: { programStudiId: mataKuliah.programStudiId },
    });

    for (const fieldDef of programStudiFields) {
      const value = fieldsData[fieldDef.fieldName];

      if (
        fieldDef.isRequired &&
        (value === undefined ||
          value === null ||
          (typeof value === "string" && value.trim() === ""))
      ) {
        return {
          success: false,
          message: `Field '${fieldDef.fieldName}' wajib diisi.`,
        };
      }

      if (value !== undefined && value !== null && value !== "") {
        if (fieldDef.fieldType === "NUMBER") {
          if (isNaN(Number(value))) {
            return {
              success: false,
              message: `Field '${fieldDef.fieldName}' harus berupa angka.`,
            };
          }
        } else if (fieldDef.fieldType === "DATE") {
          if (isNaN(new Date(value).getTime())) {
            return {
              success: false,
              message: `Field '${fieldDef.fieldName}' harus berupa tanggal yang valid.`,
            };
          }
        }
      }
    }
    // --- Akhir Validasi fieldsData ---

    const updatedKegiatan = await prisma.kegiatan.update({
      where: { id },
      data: {
        // Hapus tanggalMulai dan tanggalSelesai di sini
        // tanggalMulai: tanggal.from,
        // tanggalSelesai: tanggal.to,
        mataKuliahId: parseInt(mata_kuliahId),
        status,
        fieldsData: fieldsData, // Update fieldsData
      },
    });

    revalidatePath("/admin/kegiatan/list");
    revalidatePath(`/admin/kegiatan/edit/${id}`);
    revalidatePath(`/admin/kegiatan/detail/${id}`);

    return { success: true, data: updatedKegiatan };
  } catch (error) {
    console.error("Error editing kegiatan:", error);
    return {
      success: false,
      message:
        "Gagal mengedit kegiatan. " +
        (error instanceof Error ? error.message : String(error)),
    };
  }
}

// ... (fungsi deleteKegiatan, updateKegiatanStatus, uploadLampiranToKegiatan, deleteLampiran tetap sama)

// =============================================================
// NEW SERVER ACTION: fetchProgramStudiFieldsAction
// =============================================================
// Ini adalah server action yang aman dipanggil dari client component.
// Fungsi ini akan mengambil definisi field kustom untuk suatu Program Studi.
export async function fetchProgramStudiFieldsAction(programStudiId: string) {
  if (!programStudiId) {
    console.warn(
      "fetchProgramStudiFieldsAction called with empty programStudiId."
    );
    return [];
  }

  try {
    const fields = await prisma.programStudiField.findMany({
      where: { programStudiId },
      orderBy: { order: "asc" }, // Pastikan terurut
    });
    // Pastikan tidak ada objek non-serializable yang dikirim ke client
    return fields.map((field) => ({
      id: field.id,
      fieldName: field.fieldName,
      fieldType: field.fieldType,
      isRequired: field.isRequired,
      order: field.order,
    }));
  } catch (error) {
    console.error("Error fetching program studi fields in action:", error);
    // Mengembalikan array kosong atau error yang di-handle dengan baik
    return [];
  }
}

// =============================================================
// ACTION: deleteKegiatan
// Menghapus kegiatan beserta semua lampiran terkaitnya (fisik dan database)
// =============================================================
export async function deleteKegiatan(id: string) {
  if (!id) {
    return { success: false, message: "ID Kegiatan tidak ditemukan." };
  }

  try {
    // 1. Temukan semua lampiran yang terkait dengan kegiatan ini
    const lampiranToDelete = await prisma.lampiran.findMany({
      where: { kegiatanId: id },
      select: { id: true, namaFile: true }, // Ambil ID dan nama file untuk proses penghapusan
    });

    // 2. Hapus setiap lampiran fisik dan entri database-nya
    for (const lampiran of lampiranToDelete) {
      await deleteKegiatanLampiranFile(lampiran.id); // Panggil helper untuk hapus fisik
      // Kemudian hapus dari database
      await prisma.lampiran.delete({ where: { id: lampiran.id } });
    }

    // 3. Hapus kegiatan itu sendiri dari database
    const deletedKegiatan = await prisma.kegiatan.delete({
      where: { id },
    });

    revalidatePath("/admin/kegiatan/list"); // Revalidate path daftar kegiatan
    revalidatePath(`/admin/kegiatan/detail/${id}`); // Revalidate path detail kegiatan jika ada

    console.log(`Kegiatan dengan ID ${id} berhasil dihapus.`);
    return {
      success: true,
      data: deletedKegiatan,
      message: "Kegiatan berhasil dihapus.",
    };
  } catch (error) {
    console.error("Gagal menghapus kegiatan:", error);
    // Anda bisa menambahkan penanganan error spesifik Prisma di sini,
    // misalnya untuk Foreign Key Constraint jika ada relasi lain yang mencegah penghapusan
    if (error instanceof Error) {
      return {
        success: false,
        message: `Gagal menghapus kegiatan: ${error.message}`,
      };
    }
    return {
      success: false,
      message:
        "Terjadi kesalahan yang tidak diketahui saat menghapus kegiatan.",
    };
  }
}

// =============================================================
// ACTION: updateKegiatanStatus
// Memperbarui status kegiatan (DIAJUKAN, DISETUJUI, DITOLAK)
// =============================================================
export async function updateKegiatanStatus(payload: TUpdateStatusKegiatan) {
  const { data, error } = await validateServerActionPayload(
    payload,
    updateStatusKegiatanSchema
  );

  if (error) {
    return error;
  }
  if (!data) {
    return { success: false, message: "Data tidak valid." };
  }

  const { kegiatanId, status, alasanDitolak } = data;

  try {
    const updatedKegiatan = await prisma.kegiatan.update({
      where: { id: kegiatanId },
      data: {
        status,
        alasanDitolak: status === "DITOLAK" ? alasanDitolak : null, // Set alasanDitolak hanya jika statusnya DITOLAK
      },
      include: {
        // Sertakan relasi yang diperlukan untuk notifikasi
        logbook: {
          include: {
            mahasiswa: {
              include: {
                pengguna: {
                  select: { id: true, nama: true },
                },
              },
            },
          },
        },
        // MataKuliah: true, // Sertakan MataKuliah jika Anda perlu akses fieldsData di sini untuk judul notifikasi
      },
    });

    const pengajuId = updatedKegiatan.logbook.mahasiswa?.pengguna.id;
    // Mendapatkan judul kegiatan dari fieldsData (asumsi 'judul' ada di fieldsData JSON)
    const kegiatanJudul =
      (updatedKegiatan.fieldsData as any)?.judul || "Kegiatan Anda";

    if (pengajuId) {
      let notifPesan = "";
      let notifJudul = "";

      if (status === "DISETUJUI") {
        notifJudul = "Kegiatan Disetujui";
        notifPesan = `Kegiatan "${kegiatanJudul}" Anda telah disetujui.`;
      } else if (status === "DITOLAK") {
        notifJudul = "Kegiatan Ditolak";
        notifPesan = `Kegiatan "${kegiatanJudul}" Anda telah ditolak. ${
          alasanDitolak ? `Alasan: ${alasanDitolak}` : ""
        }`;
      }

      await createNotifikasi({
        judul: notifJudul,
        penggunaId: pengajuId,
        pesan: notifPesan,
      });
    }

    revalidatePath("/admin/kegiatan/list"); // Revalidate daftar kegiatan
    revalidatePath(`/admin/kegiatan/detail/${kegiatanId}`); // Revalidate halaman detail kegiatan

    console.log(`Status kegiatan ${kegiatanId} diperbarui menjadi ${status}.`);
    return {
      success: true,
      data: updatedKegiatan,
      message: `Status kegiatan berhasil diubah menjadi ${status}.`,
    };
  } catch (error) {
    console.error("Gagal memperbarui status kegiatan:", error);
    if (error instanceof Error) {
      return {
        success: false,
        message: `Gagal memperbarui status kegiatan: ${error.message}`,
      };
    }
    return {
      success: false,
      message:
        "Terjadi kesalahan yang tidak diketahui saat memperbarui status kegiatan.",
    };
  }
}

// =============================================================
// ACTION: deleteLampiran
// Menghapus satu lampiran spesifik (fisik dan dari database)
// =============================================================
export async function deleteLampiran(lampiranId: string) {
  "use server"; // Pastikan ini adalah Server Action

  if (!lampiranId) {
    return { success: false, message: "ID Lampiran tidak ditemukan." };
  }

  try {
    // 1. Dapatkan informasi lampiran yang akan dihapus, termasuk ID kegiatannya
    const lampiran = await prisma.lampiran.findUnique({
      where: { id: lampiranId },
      select: { kegiatanId: true, namaFile: true }, // Perlu kegiatanId untuk revalidatePath
    });

    if (!lampiran) {
      return { success: false, message: "Lampiran tidak ditemukan." };
    }

    // 2. Hapus file fisik dari sistem penyimpanan menggunakan helper
    await deleteKegiatanLampiranFile(lampiran.kegiatanId); // Panggil helper function

    // 3. Hapus entri lampiran dari database
    await prisma.lampiran.delete({
      where: { id: lampiranId },
    });

    // 4. Revalidate path yang relevan untuk memperbarui UI
    // Ini biasanya halaman detail kegiatan tempat lampiran ditampilkan
    revalidatePath(`/admin/kegiatan/detail/${lampiran.kegiatanId}`); // Contoh path detail kegiatan
    revalidatePath(`/admin/kegiatan/edit/${lampiran.kegiatanId}`); // Jika ada halaman edit yang menampilkan lampiran

    console.log(`[ACTION] Lampiran dengan ID ${lampiranId} berhasil dihapus.`);
    return { success: true, message: "Lampiran berhasil dihapus." };
  } catch (error) {
    console.error(
      `[ACTION] Gagal menghapus lampiran dengan ID ${lampiranId}:`,
      error
    );
    // Anda bisa menambahkan penanganan error spesifik Prisma di sini
    if (error instanceof Error) {
      return {
        success: false,
        message: `Gagal menghapus lampiran: ${error.message}`,
      };
    }
    return {
      success: false,
      message:
        "Terjadi kesalahan yang tidak diketahui saat menghapus lampiran.",
    };
  }
}

// =============================================================
// ACTION: hapusSemuaLampiran (Menggantikan nama deleteLampiran pada beberapa konteks)
// Menghapus semua lampiran untuk suatu kegiatan berdasarkan kegiatanId
// =============================================================
export async function hapusSemuaLampiran(kegiatanId: string) {
  //
  "use server";

  if (!kegiatanId) {
    return {
      success: false,
      message: "ID Kegiatan tidak ditemukan.",
      deletedCount: 0,
    };
  }

  try {
    const lampiranToDelete = await prisma.lampiran.findMany({
      where: { kegiatanId: kegiatanId },
      select: { id: true, namaFile: true },
    });

    for (const lampiran of lampiranToDelete) {
      await deleteKegiatanLampiranFile(lampiran.id); // Hapus file fisik
    }

    const deleteResult = await prisma.lampiran.deleteMany({
      where: { kegiatanId: kegiatanId },
    });

    revalidatePath(`/admin/kegiatan/detail/${kegiatanId}`);
    revalidatePath(`/admin/kegiatan/edit/${kegiatanId}`);

    console.log(
      `[ACTION] ${deleteResult.count} lampiran untuk kegiatan ${kegiatanId} berhasil dihapus.`
    );
    return {
      success: true,
      message: `${deleteResult.count} lampiran berhasil dihapus.`,
      deletedCount: deleteResult.count,
    };
  } catch (error) {
    console.error(
      `[ACTION] Gagal menghapus semua lampiran untuk kegiatan ${kegiatanId}:`,
      error
    );
    if (error instanceof Error) {
      return {
        success: false,
        message: `Gagal menghapus semua lampiran: ${error.message}`,
        deletedCount: 0,
      };
    }
    return {
      success: false,
      message:
        "Terjadi kesalahan yang tidak diketahui saat menghapus lampiran.",
      deletedCount: 0,
    };
  }
}

// =============================================================
// ACTION: tanggapiKegiatan (Menggantikan updateKegiatanStatus)
// =============================================================
export async function tanggapiKegiatan(
  kegiatanId: string | number, // Parameter ID
  alasan: string = "", // Parameter alasan
  status: string // Parameter status (enum dari Prisma client)
) {
  //
  "use server";

  if (!kegiatanId) {
    return { success: false, message: "ID Kegiatan tidak ditemukan." };
  }
  // Convert kegiatanId to string if it's a number, as Prisma ID is string for Kegiatan
  const idString =
    typeof kegiatanId === "number" ? String(kegiatanId) : kegiatanId;

  try {
    const updatedKegiatan = await prisma.kegiatan.update({
      where: { id: idString },
      data: {
        status,
        alasanDitolak: status === "DITOLAK" ? alasan : null,
      },
      include: {
        logbook: {
          include: {
            mahasiswa: {
              include: {
                pengguna: {
                  select: { id: true, nama: true },
                },
              },
            },
          },
        },
        // MataKuliah: { // Sertakan jika Anda perlu akses fieldsData di sini untuk judul notifikasi
        //   select: {
        //     programStudi: {
        //       select: {
        //         fields: true
        //       }
        //     }
        //   }
        // }
      },
    });

    const pengajuId = updatedKegiatan.logbook.mahasiswa?.pengguna.id;
    const kegiatanJudul =
      (updatedKegiatan.fieldsData as any)?.judul || "Kegiatan Anda"; // Asumsi 'judul' ada di fieldsData

    if (pengajuId) {
      let notifPesan = "";
      let notifJudul = "";

      if (status === "DISETUJUI") {
        notifJudul = "Kegiatan Disetujui";
        notifPesan = `Kegiatan "${kegiatanJudul}" Anda telah disetujui.`;
      } else if (status === "DITOLAK") {
        notifJudul = "Kegiatan Ditolak";
        notifPesan = `Kegiatan "${kegiatanJudul}" Anda telah ditolak. ${
          alasan ? `Alasan: ${alasan}` : ""
        }`;
      }

      await createNotifikasi({
        judul: notifJudul,
        penggunaId: pengajuId,
        pesan: notifPesan,
      });
    }

    revalidatePath("/admin/kegiatan/list"); // Ganti dengan path list Anda yang sebenarnya
    revalidatePath(`/admin/kegiatan/detail/${idString}`);

    console.log(
      `[ACTION] Status kegiatan ${idString} diperbarui menjadi ${status}.`
    );
    return {
      success: true,
      data: updatedKegiatan,
      message: `Status kegiatan berhasil diubah menjadi ${status}.`,
    };
  } catch (error) {
    console.error("Gagal memperbarui status kegiatan:", error);
    if (error instanceof Error) {
      return {
        success: false,
        message: `Gagal memperbarui status kegiatan: ${error.message}`,
      };
    }
    return {
      success: false,
      message:
        "Terjadi kesalahan yang tidak diketahui saat memperbarui status kegiatan.",
    };
  }
}
