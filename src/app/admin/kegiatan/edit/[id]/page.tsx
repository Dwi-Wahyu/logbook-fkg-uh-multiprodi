// src/app/admin/kegiatan/edit/[id]/page.tsx
import { notFound } from "next/navigation";
import {
  getKegiatanById,
  getAllMataKuliah,
} from "@/app/_lib/queries/kegiatanQueries"; // Server-only queries
import { auth } from "@/config/auth";
import { redirect } from "next/navigation";
import KegiatanEditForm from "@/app/_components/kegiatan/KegiatanEditForm";

interface KegiatanEditPageProps {
  params: {
    id: string; // ID kegiatan dari URL
  };
}

export default async function KegiatanEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth();

  const { id } = await params;

  if (!session || !session.user || !session.user.id) {
    redirect("/auth/login");
  }

  // Fetch data kegiatan berdasarkan ID dari Server Component
  const kegiatan = await getKegiatanById(id);

  if (!kegiatan) {
    notFound(); // Tampilkan halaman 404 jika kegiatan tidak ditemukan
  }

  // Ambil semua mata kuliah untuk dropdown Select
  const allMataKuliah = await getAllMataKuliah();

  // Kita perlu mendapatkan definisi fields dari Program Studi terkait Mata Kuliah ini
  // untuk mengisi form dinamis.
  let programStudiFields: Array<{
    id: string;
    fieldName: string;
    fieldType: string;
    isRequired: boolean;
    order: number;
  }> = [];
  if (kegiatan.MataKuliah?.ProgramStudi?.fields) {
    programStudiFields = kegiatan.MataKuliah.ProgramStudi.fields.map(
      (field) => ({
        id: field.id, // Perlu ID untuk key di map
        fieldName: field.fieldName,
        fieldType: field.fieldType,
        isRequired: field.isRequired,
        order: field.order,
      })
    );
    // Urutkan berdasarkan order
    programStudiFields.sort((a, b) => a.order - b.order);
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Edit Kegiatan Akademik
      </h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        Perbarui informasi kegiatan ini.
      </p>
      <KegiatanEditForm
        kegiatan={JSON.parse(JSON.stringify(kegiatan))} // Pastikan data terserialisasi
        allMataKuliah={allMataKuliah}
        programStudiFields={programStudiFields} // Teruskan fieldsDefinition ke Client Component
      />
    </div>
  );
}
