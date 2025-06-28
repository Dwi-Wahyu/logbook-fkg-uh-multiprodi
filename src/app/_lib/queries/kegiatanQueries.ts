// src/app/_lib/queries/kegiatanQueries.ts
import "server-only";

import { prisma } from "@/lib/prisma";
import { Prisma } from "@/generated/prisma";
import { TKegiatanSearchParams } from "../validations/kegiatanSearchParams";
import { auth } from "@/config/auth";

export type KegiatanWithRelations = Prisma.KegiatanGetPayload<{
  include: {
    MataKuliah: {
      select: {
        judul: true;
        semester: true;
        ProgramStudi: {
          select: {
            id: true;
            nama: true;
            fields: true;
          };
        };
      };
    };
    logbook: {
      include: {
        mahasiswa: {
          include: {
            pengguna: {
              select: {
                id: true;
                nama: true;
                username: true;
                avatar: true;
              };
            };
          };
        };
      };
    };
    lampiran: {
      select: {
        id: true;
        namaFile: true;
        url: true;
      };
    };
  };
}>;

export async function getKegiatan(input: TKegiatanSearchParams) {
  type WhereClause = Prisma.KegiatanWhereInput;
  let whereClause: WhereClause = {};

  const session = await auth();

  // Contoh filter berdasarkan judul di fieldsData (membutuhkan implementasi JSON filtering di Prisma)
  // if (input.judul) {
  //   whereClause.fieldsData = {
  //     path: ['$.judul'], // Mengasumsikan 'judul' adalah root key di JSON
  //     string_contains: input.judul,
  //     mode: 'insensitive'
  //   } as Prisma.JsonFilter; // Perlu casting karena Prisma tidak secara otomatis tahu pathnya
  // }

  // if (input.status) {
  //   whereClause.status = input.status;
  // }
  // if (input.mataKuliahId && input.mataKuliahId !== "0") {
  //   whereClause.mataKuliahId = parseInt(input.mataKuliahId);
  // }
  // if (input.pengajuId) {
  //   whereClause.logbook = {
  //     mahasiswa: {
  //       penggunaId: input.pengajuId,
  //     },
  //   };
  // }

  if (session?.user.peran === "MAHASISWA") {
    whereClause.logbook = {
      penggunaId: {
        contains: session.user.id,
      },
    };
  }

  if (session?.user.peran === "DOSEN") {
    whereClause.logbook = {
      Pengguna: {
        mahasiswa: {
          pembimbingId: session.user.id,
        },
      },
    };
  }

  if (session?.user.peran === "ADMIN") {
    whereClause.logbook = {
      Pengguna: {
        programStudiId: session.user.programStudiId,
      },
    };
  }

  const filtered = await prisma.kegiatan.count({
    where: whereClause,
  });

  const data = await prisma.kegiatan.findMany({
    take: input.perPage || 10,
    skip: ((input.page || 1) - 1) * (input.perPage || 10),
    where: whereClause,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      MataKuliah: {
        select: {
          judul: true,
          semester: true,
          ProgramStudi: {
            // Include program studi untuk ambil fields jika diperlukan di FE
            select: {
              id: true,
              nama: true,
              fields: true, // Untuk mengetahui struktur fieldsData saat menampilkan
            },
          },
        },
      },
      logbook: {
        include: {
          mahasiswa: {
            include: {
              pengguna: {
                select: {
                  id: true,
                  nama: true,
                  username: true,
                  avatar: true,
                },
              },
            },
          },
        },
      },
      lampiran: {
        select: {
          id: true,
          namaFile: true,
          url: true,
        },
      },
    },
  });

  const pageCount = Math.ceil(filtered / (input.perPage || 10));

  return { data, pageCount, filtered };
}

export async function getKegiatanById(id: string) {
  if (!id) return null;

  const kegiatan = await prisma.kegiatan.findUnique({
    where: { id },
    include: {
      MataKuliah: {
        select: {
          id: true,
          judul: true,
          semester: true,
          ProgramStudi: {
            select: {
              id: true,
              nama: true,
              fields: true, // Untuk mengetahui struktur fieldsData saat menampilkan
            },
          },
        },
      },
      logbook: {
        include: {
          mahasiswa: {
            include: {
              pengguna: {
                select: {
                  id: true,
                  nama: true,
                  username: true,
                  avatar: true,
                },
              },
            },
          },
        },
      },
      lampiran: true,
    },
  });
  return kegiatan;
}

export async function getAllMataKuliah() {
  const allMataKuliah = await prisma.mataKuliah.findMany({
    select: {
      id: true,
      judul: true,
      semester: true,
      programStudiId: true, // Sertakan ini untuk mengambil ProgramStudiField nantinya
    },
    orderBy: {
      judul: "asc",
    },
  });
  return allMataKuliah;
}

// Hapus getProgramStudiFields dari sini, karena sudah dipindahkan ke actions
// export async function getProgramStudiFields(programStudiId: string) { ... }

// Keep this one if it's used elsewhere
export async function getPenanggungJawabMahasiswa(mahasiswaId: string) {
  const mahasiswa = await prisma.mahasiswa.findUnique({
    where: { id: mahasiswaId },
    select: {
      pengguna: {
        select: {
          nama: true,
          username: true,
        },
      },
      pembimbing: {
        select: {
          pengguna: {
            select: {
              nama: true,
              username: true,
            },
          },
        },
      },
    },
  });
  return mahasiswa;
}

// =============================================================
// QUERY: getKegiatanById (Menggantikan getOneKegiatan)
// =============================================================
export async function getKegiatanEach(id: string) {
  if (!id) return null;

  const kegiatan = await prisma.kegiatan.findUnique({
    where: { id },
    include: {
      MataKuliah: {
        select: {
          id: true, // Tambahkan ID mata kuliah
          judul: true,
          semester: true,
          ProgramStudi: {
            // Sertakan program studi untuk mendapatkan fields definition
            select: {
              id: true,
              nama: true,
              fields: true, // Dapatkan definisi fields ProgramStudiField
            },
          },
        },
      },
      logbook: {
        include: {
          mahasiswa: {
            include: {
              pengguna: {
                select: {
                  id: true,
                  nama: true,
                  username: true,
                  avatar: true,
                },
              },
            },
          },
        },
      },
      lampiran: {
        // Sertakan lampiran dengan detail yang dibutuhkan
        select: {
          id: true,
          namaFile: true,
          url: true,
          // Anda mungkin perlu ekstensi file di sini untuk `lampiranImageExtensions`
          // Jika `ext` tidak ada di model Lampiran, Anda harus menghitungnya di frontend
        },
      },
    },
  });

  // Jika Anda perlu 'ext' di objek lampiran dan tidak ada di Prisma model Lampiran,
  // Anda bisa menghitungnya di sini.
  if (kegiatan) {
    // Kloning objek kegiatan untuk menghindari mutasi langsung dari Prisma client result
    const serializableKegiatan = JSON.parse(JSON.stringify(kegiatan));

    serializableKegiatan.lampiran = kegiatan.lampiran.map((lamp) => {
      const parts = lamp.namaFile.split(".");
      const ext = parts.length > 1 ? "." + parts.pop() : ""; // Ambil ekstensi dengan titik
      return {
        ...lamp,
        ext: ext, // Tambahkan properti ext
        path: lamp.namaFile, // Asumsi path di server adalah namaFile itu sendiri setelah upload
      };
    });
    return serializableKegiatan;
  }

  return kegiatan;
}
