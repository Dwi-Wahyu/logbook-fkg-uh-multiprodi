// prisma/seed.ts

import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log(
    "Memulai seeding Program Studi dengan nama dan display name yang disesuaikan..."
  );

  const programStudiToSeed = [
    {
      nama: "Doktor Ilmu Kedokteran Gigi",
      displayName: "PROGRAM DOKTOR ILMU KEDOKTERAN GIGI",
    },
    {
      nama: "Fakultas Kedokteran Gigi",
      displayName: "PROGRAM STUDI FAKULTAS KEDOKTERAN GIGI",
    },
    {
      nama: "Magister Ilmu Kedokteran Gigi",
      displayName: "PROGRAM MAGISTER ILMU KEDOKTERAN GIGI",
    },
    {
      nama: "PPDGS Ilmu Bedah Mulut dan Maksilofasial",
      displayName:
        "PROGRAM PENDIDIKAN DOKTER GIGI SPESIALIS ILMU BEDAH MULUT DAN MAKSILOFASIAL",
    },
    {
      nama: "PPDGS Kedokteran Gigi Anak",
      displayName:
        "PROGRAM PENDIDIKAN DOKTER GIGI SPESIALIS KEDOKTERAN GIGI ANAK",
    },
    {
      nama: "PPDGS Konservasi Gigi",
      displayName: "PROGRAM PENDIDIKAN DOKTER GIGI SPESIALIS KONSERVASI GIGI",
    },
    {
      nama: "PPDGS Ortodonti",
      displayName: "PROGRAM PENDIDIKAN DOKTER GIGI SPESIALIS ORTODONTI",
    },
    {
      nama: "PPDGS Penyakit Mulut",
      displayName:
        "PROGRAM PENDIDIKAN DOKTER GIGI SPESIALIS ILMU PENYAKIT MULUT",
    }, // Sesuai permintaan spesifik
    {
      nama: "PPDGS Periodonsia",
      displayName: "PROGRAM PENDIDIKAN DOKTER GIGI SPESIALIS PERIODONSIA",
    },
    {
      nama: "PPDGS Prostodonsia",
      displayName: "PROGRAM PENDIDIKAN DOKTER GIGI SPESIALIS PROSTODONSIA",
    },
  ];

  for (const psData of programStudiToSeed) {
    try {
      // Menggunakan 'nama' sebagai kriteria unik untuk menemukan yang sudah ada
      const existingPs = await prisma.programStudi.findUnique({
        where: { nama: psData.nama },
      });

      if (existingPs) {
        console.log(
          `  Program Studi "${psData.nama}" sudah ada. Memperbarui displayName jika berbeda.`
        );
        // Opsional: Jika Anda ingin memperbarui displayName jika nama sudah ada tapi displayName berbeda
        if (existingPs.displayName !== psData.displayName) {
          await prisma.programStudi.update({
            where: { id: existingPs.id },
            data: { displayName: psData.displayName },
          });
          console.log(
            `    displayName untuk "${psData.nama}" diperbarui menjadi "${psData.displayName}".`
          );
        }
      } else {
        const newPs = await prisma.programStudi.create({
          data: {
            nama: psData.nama,
            displayName: psData.displayName,
            // templateSingleFieldForDate default ke true seperti di schema Anda,
            // jadi tidak perlu disetel secara eksplisit kecuali Anda ingin nilai false
            templateSingleFieldForDate: true, // Pastikan nilai default sesuai kebutuhan Anda
          },
        });
        console.log(
          `  Berhasil menambahkan Program Studi: "${newPs.nama}" (ID: ${newPs.id})`
        );
      }
    } catch (e) {
      console.error(
        `  Gagal menambahkan/memperbarui Program Studi "${psData.nama}":`,
        e
      );
      // Anda bisa menambahkan penanganan error spesifik di sini,
      // misalnya untuk unique constraint violation jika 'nama' tidak unik.
    }
  }

  console.log("Seeding Program Studi selesai.");
}

main()
  .catch((e) => {
    console.error("Terjadi kesalahan selama seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
