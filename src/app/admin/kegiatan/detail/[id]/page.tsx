// src/app/admin/kegiatan/detail/[id]/page.tsx
import { notFound, redirect } from "next/navigation";
import { getKegiatanById } from "@/app/_lib/queries/kegiatanQueries";
import { auth } from "@/config/auth";
import KegiatanDetailClient from "@/app/_components/kegiatan/KegiatanDetailClient";

interface KegiatanDetailPageProps {
  params: {
    id: string;
  };
}

export default async function KegiatanDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth();

  if (!session || !session.user || !session.user.id) {
    redirect("/auth/login");
  }

  const { id } = await params;

  const kegiatan = await getKegiatanById(id);

  if (!kegiatan) {
    notFound();
  }

  let programStudiFields: Array<{
    fieldName: string;
    fieldType: string;
    order: number;
  }> = [];

  if (kegiatan.MataKuliah?.ProgramStudi?.fields) {
    programStudiFields = kegiatan.MataKuliah.ProgramStudi.fields.map(
      (field) => ({
        fieldName: field.fieldName,
        fieldType: field.fieldType,
        order: field.order,
      })
    );
    programStudiFields.sort((a, b) => a.order - b.order);
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2 text-center text-gray-800">
        Detail Kegiatan
      </h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        Informasi lengkap mengenai kegiatan yang diajukan.
      </p>
      <KegiatanDetailClient
        kegiatan={JSON.parse(JSON.stringify(kegiatan))}
        programStudiFields={programStudiFields}
      />
    </div>
  );
}
