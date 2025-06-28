import { PrismaClient } from "@/generated/prisma";
import { hashSync } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Memulai proses seeding untuk akun SUPERADMIN...");

  await prisma.pengguna.deleteMany({
    where: {
      username: "admin",
    },
  });
  console.log("Data akun 'admin' lama berhasil dibersihkan (jika ada).");

  const superAdmin = await prisma.pengguna.create({
    data: {
      nama: "Super Administrator",
      username: "admin",
      password: hashSync("admin123", 10),
      peran: "SUPERADMIN",
      avatar: null,
      programStudiId: "2a5bf379-2ebd-4fda-8f2f-819e37dc3bf3",
    },
  });
  console.log(
    `Seeded akun SUPERADMIN: ${superAdmin.nama} (username: ${superAdmin.username})`
  );
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
