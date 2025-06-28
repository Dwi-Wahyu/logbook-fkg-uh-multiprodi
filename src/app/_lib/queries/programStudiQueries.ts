import "server-only";

import { prisma } from "@/lib/prisma";

export async function getAllProgramStudi() {
  const programStudi = await prisma.programStudi.findMany({
    select: {
      id: true,
      nama: true,
    },
    orderBy: {
      nama: "asc",
    },
  });
  return programStudi;
}

export async function getProgramStudiById(id: string) {
  if (!id) {
    return null; // Mengembalikan null atau melemparkan error jika ID tidak valid
  }

  const programStudi = await prisma.programStudi.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      nama: true,
      displayName: true,
      fields: true,
    },
  });

  return programStudi;
}
