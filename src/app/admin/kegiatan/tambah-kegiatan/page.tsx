// /admin/kegiatan/tambah-kegiatan/page.tsx
import TambahKegiatanForm from "@/app/_components/kegiatan/TambahKegiatanForm";
import { getAllMataKuliah } from "@/app/_lib/queries/kegiatanQueries";
import { getProgramStudiById } from "@/app/_lib/queries/programStudiQueries";
import { auth } from "@/config/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation"; // Import redirect
import { Suspense } from "react";

export default async function TambahKegiatanPage() {
  const session = await auth();

  // Pastikan pengguna login
  if (!session || !session.user) {
    redirect("/auth/login"); // Redirect ke halaman login jika tidak ada sesi
  }

  // Dapatkan ID pengguna yang sedang login untuk prop 'pengajuId'
  const pengajuId = session.user.id; // Asumsi ID pengguna ada di session.user.id

  // Ambil semua data Mata Kuliah dari database
  // Menggunakan fungsi getAllMataKuliah dari kegiatanQueries untuk konsistensi
  // Pastikan path import untuk getAllMataKuliah sudah benar
  const allMataKuliah = await getAllMataKuliah();

  return (
    <Suspense fallback={<h1>Loading Form . . . </h1>}>
      <TambahKegiatanForm allMataKuliah={allMataKuliah} pengajuId={pengajuId} />
    </Suspense>
  );
}
