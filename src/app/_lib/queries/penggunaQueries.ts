import "server-only";

import { prisma } from "@/lib/prisma";
import { TPenggunaSearchParams } from "../validations/penggunaSearchParams";
import { Prisma } from "@/generated/prisma";

export async function getPengguna(input: TPenggunaSearchParams) {
  type WhereClause = Prisma.PenggunaWhereInput;
  let whereClause: WhereClause = {
    nama: {
      contains: input.nama,
    },
  };

  const filtered = await prisma.pengguna.count({
    where: { ...whereClause, peran: input.peran },
  });
  const data = await prisma.pengguna.findMany({
    take: input.perPage,
    skip: (input.page - 1) * input.perPage,
    where: { ...whereClause, peran: input.peran },
    select: {
      id: true,
      nama: true,
      username: true,
      peran: true,
      programStudi: {
        select: {
          nama: true,
        },
      },
      mahasiswa: {
        select: {
          angkatan: true,
        },
      },
      dosen: {
        select: {
          mahasiswaBimbingan: {
            select: {
              pengguna: {
                select: {
                  nama: true,
                },
              },
            },
          },
        },
      },
    },
  });

  const pageCount = Math.ceil(filtered / input.perPage);

  return { data, pageCount, filtered };
}

export async function getProfilPengguna(id: string) {
  const profil = await prisma.pengguna.findUnique({
    where: {
      id,
    },
    select: {
      nama: true,
      username: true,
      peran: true,
      avatar: true,
      mahasiswa: {
        select: {
          semester: true,
          judulDisertasi: true,
          alamat: true,
          alamatKeluarga: true,
          angkatan: true,
          email: true,
          mulaiMasukPendidikan: true,
          nomorTelpon: true,
          pekerjaan: true,
          tahunLulus: true,
          tempatTanggalLahir: true,
          pembimbing: {
            select: {
              pengguna: {
                select: {
                  nama: true,
                  avatar: true,
                },
              },
            },
          },
        },
      },
    },
  });

  return profil;
}

export async function getAllDosen() {
  const dosenList = await prisma.dosen.findMany({
    select: {
      id: true, // ID dari model Dosen
      pengguna: {
        select: {
          id: true,
          nama: true,
        },
      },
    },
    orderBy: {
      pengguna: {
        nama: "asc",
      },
    },
  });

  return dosenList.map((dosen) => ({
    id: dosen.id,
    nama: dosen.pengguna.nama,
  }));
}

export async function getDetailPengguna(id: string) {
  const dataPengguna = await prisma.pengguna.findUnique({
    where: {
      id,
    },
    include: {
      mahasiswa: {
        select: {
          email: true,
          nomorTelpon: true,
          alamat: true,
          tempatTanggalLahir: true,
          mulaiMasukPendidikan: true,
          tahunLulus: true,
          pembimbing: {
            select: {
              pengguna: {
                select: {
                  nama: true,
                  username: true,
                  avatar: true,
                  programStudi: {
                    select: {
                      displayName: true,
                    },
                  },
                },
              },
            },
          },
          pengguna: {
            select: {
              nama: true,
              username: true,
            },
          },
        },
      },
      dosen: {
        select: {
          pengguna: {
            select: {
              nama: true,
              username: true,
            },
          },
          mahasiswaBimbingan: {
            select: {
              pengguna: {
                select: {
                  id: true,
                  avatar: true,
                  nama: true,
                  username: true,
                },
              },
            },
          },
        },
      },
    },
  });

  return dataPengguna;
}

export async function getAllPenggunaDosen() {
  const allDosen = prisma.pengguna.findMany({
    where: {
      peran: "DOSEN",
    },
    select: {
      id: true,
      nama: true,
    },
  });

  return allDosen;
}
