// prisma/seed.ts
import { PrismaClient } from "@/generated/prisma";
import { hashSync } from "bcryptjs"; // Tetap pertahankan jika ada bagian lain dari seed script yang menggunakannya

const prisma = new PrismaClient();

async function main() {
  console.log("Memulai proses seeding untuk Program Studi dan Fieldnya...");

  // Hapus data ProgramStudiField dan ProgramStudi yang ada
  // Ini penting untuk memastikan bahwa setiap kali Anda menjalankan seed, data akan bersih dan tidak ada duplikasi.
  await prisma.programStudiField.deleteMany();
  await prisma.programStudi.deleteMany();
  console.log("Data Program Studi dan Field lama berhasil dibersihkan.");

  // 1. Seed ProgramStudi dengan data yang diberikan
  const ppdgsIpm = await prisma.programStudi.create({
    data: {
      nama: "PPDGS ILMU PENYAKIT MULUT", // Nama program studi
      displayName:
        "PROGRAM PENDIDIKAN DOKTER GIGI SPESIALIS ILMU PENYAKIT MULUT", // Display name program studi
      templateSingleFieldForDate: true, // Flag sesuai permintaan
    },
  });
  console.log(`Seeded Program Studi: ${ppdgsIpm.displayName}`);

  // 2. Seed ProgramStudiField untuk Program Studi "PPDGS ILMU PENYAKIT MULUT"
  // Kolom-kolom diambil dari header tabel di Logbook PPDGS OM Unhas-4.docx
  const programStudiFieldsData = [
    {
      fieldName: "Hari/Tanggal",
      fieldType: "DATE",
      isRequired: true,
      order: 1,
    },
    { fieldName: "Jam", fieldType: "TEXT", isRequired: true, order: 2 },
    { fieldName: "No. RM", fieldType: "TEXT", isRequired: false, order: 3 },
    {
      fieldName: "Nama Pasien",
      fieldType: "TEXT",
      isRequired: false,
      order: 4,
    },
    { fieldName: "Diagnosa", fieldType: "TEXT", isRequired: false, order: 5 },
    { fieldName: "Terapi", fieldType: "TEXT", isRequired: false, order: 6 },
    { fieldName: "DPJP", fieldType: "TEXT", isRequired: false, order: 7 },
    { fieldName: "Keterangan", fieldType: "TEXT", isRequired: false, order: 8 },
  ];

  for (const field of programStudiFieldsData) {
    await prisma.programStudiField.create({
      data: {
        programStudiId: ppdgsIpm.id,
        fieldName: field.fieldName,
        fieldType: field.fieldType,
        isRequired: field.isRequired,
        order: field.order,
      },
    });
    console.log(
      `Seeded Program Studi Field: ${field.fieldName} for ${ppdgsIpm.nama}`
    );
  }

  console.log("\nProses seeding untuk Program Studi dan Field berhasil.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("Koneksi database terputus.");
  })
  .catch(async (e) => {
    console.error("Terjadi kesalahan saat proses seeding:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
