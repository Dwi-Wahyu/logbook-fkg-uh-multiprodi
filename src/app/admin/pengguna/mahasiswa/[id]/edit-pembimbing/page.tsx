// src/app/admin/mahasiswa/[id]/edit-pembimbing/page.tsx
import { notFound, redirect } from "next/navigation";
import { auth } from "@/config/auth"; // Import auth
import { getMahasiswaWithPembimbing } from "@/app/_lib/queries/bimbinganQueries"; // Import queries dari file bimbinganQueries.ts

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card"; // Import Card components for styling
import { getAllDosen } from "@/app/_lib/queries/penggunaQueries";
import GantiPembimbingForm from "@/app/_components/bimbingan/GantiPembimbingForm";

// Props yang diterima oleh halaman Next.js
interface EditPembimbingPageProps {
  params: {
    id: string; // ID Mahasiswa dari URL
  };
}

export default async function EditPembimbingPage({
  params,
}: EditPembimbingPageProps) {
  const session = await auth();

  // Redirect jika tidak ada sesi atau tidak punya peran yang sesuai
  if (!session || !session.user || !session.user.id) {
    redirect("/auth/login");
  }

  // Hanya ADMIN atau SUPERADMIN yang boleh mengakses halaman ini
  if (session.user.peran !== "ADMIN" && session.user.peran !== "SUPERADMIN") {
    redirect("/dashboard"); // Atau halaman akses ditolak
  }

  const mahasiswaId = params.id;

  // Fetch data secara paralel
  const [mahasiswaData, allDosen] = await Promise.all([
    getMahasiswaWithPembimbing(mahasiswaId),
    getAllDosen(),
  ]);

  if (!mahasiswaData) {
    notFound(); // Tampilkan halaman 404 jika mahasiswa tidak ditemukan
  }

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-2xl mx-auto shadow-lg rounded-xl">
        <CardHeader className="border-b pb-4">
          <CardTitle className="text-2xl font-bold text-gray-900">
            Ubah Pembimbing Mahasiswa
          </CardTitle>
          <CardDescription className="text-gray-600">
            Perbarui informasi pembimbing untuk{" "}
            <span className="font-semibold text-primary-600">
              {mahasiswaData.namaMahasiswa} ({mahasiswaData.usernameMahasiswa})
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <GantiPembimbingForm
            mahasiswa={mahasiswaData} // Pass the fetched student data
            allDosen={allDosen} // Pass the list of all lecturers
          />
        </CardContent>
      </Card>
    </div>
  );
}
