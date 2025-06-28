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
  const session = await auth(); // Get the current user session

  if (!session || !session.user || !session.user.id) {
    console.warn(
      "Unauthorized access to getKegiatan: No session or user ID found."
    );
    return { data: [], pageCount: 0, filtered: 0 };
  }

  // Definisikan array untuk menyimpan semua kondisi filter
  const filters: Prisma.KegiatanWhereInput[] = [];

  // Filter berdasarkan peran pengguna yang login
  if (session.user.peran === "MAHASISWA") {
    // Filter kegiatan yang logbook-nya terkait dengan mahasiswa yang sedang login
    filters.push({
      logbook: {
        mahasiswa: {
          penggunaId: session.user.id, // Gunakan perbandingan langsung (equals) untuk ID
        },
      },
    });
  } else if (session.user.peran === "DOSEN") {
    // 1. Dapatkan ID Dosen dari ID Pengguna yang login
    const dosen = await prisma.dosen.findUnique({
      where: {
        penggunaId: session.user.id,
      },
      select: {
        id: true,
      },
    });

    if (!dosen) {
      console.warn(
        "Dosen record not found for logged-in user ID:",
        session.user.id
      );
      return { data: [], pageCount: 0, filtered: 0 };
    }

    // 2. Filter kegiatan yang logbook-nya terkait dengan mahasiswa yang pembimbingId-nya adalah ID Dosen yang login
    filters.push({
      logbook: {
        mahasiswa: {
          pembimbingId: dosen.id,
        },
      },
    });
  }
  // Untuk ADMIN/SUPERADMIN, jika mereka harus melihat semua kegiatan,
  // tidak perlu menambahkan filter peran ke array `filters`.
  // `filters` akan tetap kosong pada awalnya, sehingga query akan mengambil semua.

  // Filter berdasarkan judul di fieldsData (jika ada input.judul)
  // Perlu diingat bahwa ini adalah filter pada JSON field, pastikan 'judul' ada di root JSON.
  // if (input.judul) {
  //   filters.push({
  //     fieldsData: {
  //       path: ['$.judul'],
  //       string_contains: input.judul,
  //       mode: 'insensitive' // Untuk pencarian tidak peka huruf besar/kecil
  //     } as Prisma.JsonFilter,
  //   });
  // }

  if (input.status) {
    // Ini akan secara otomatis mengecualikan null dan undefined
    filters.push({
      status: input.status,
    });
  }

  // Filter berdasarkan status (jika ada input.status dan bukan 'all' atau null)
  if (input.status && input.status !== null) {
    filters.push({
      status: input.status,
    });
  }

  // Filter berdasarkan mataKuliahId (jika ada input.mataKuliahId dan bukan 'all' atau '0')
  if (
    input.mataKuliahId &&
    input.mataKuliahId !== "all" &&
    input.mataKuliahId !== "0"
  ) {
    filters.push({
      mataKuliahId: parseInt(input.mataKuliahId),
    });
  }

  if (input.semester !== undefined && input.semester !== null) {
    filters.push({
      logbook: {
        mahasiswa: {
          semester: input.semester,
        },
      },
    });
  }

  // Gabungkan semua filter menggunakan operator AND dari Prisma
  // Jika array filters kosong, berarti tidak ada filter yang diterapkan (mengambil semua data).
  const finalWhereClause: Prisma.KegiatanWhereInput =
    filters.length > 0 ? { AND: filters } : {};

  const filtered = await prisma.kegiatan.count({
    where: finalWhereClause, // Gunakan finalWhereClause
  });

  const data: KegiatanWithRelations[] = await prisma.kegiatan.findMany({
    take: input.perPage, // nuqs/server sudah memberikan default value
    skip: (input.page - 1) * input.perPage, // nuqs/server sudah memberikan default value
    where: finalWhereClause, // Gunakan finalWhereClause
    orderBy: {
      createdAt: "desc",
    },
    include: {
      MataKuliah: {
        select: {
          judul: true,
          semester: true,
          ProgramStudi: {
            select: {
              id: true,
              nama: true,
              fields: true,
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

  const pageCount = Math.ceil(filtered / input.perPage); // Gunakan input.perPage yang sudah memiliki default

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
              pembimbing: {
                select: {
                  pengguna: {
                    select: {
                      id: true,
                      nama: true,
                      username: true,
                    },
                  },
                },
              },
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
