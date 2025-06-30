// src/app/admin/kegiatan/detail/[id]/page.tsx
import { notFound, redirect } from "next/navigation";
import {
  getKegiatanById,
  KegiatanWithRelations,
} from "@/app/_lib/queries/kegiatanQueries"; // Import type and query
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

  // getKegiatanById sekarang mengembalikan KegiatanWithRelations yang sudah mencakup jenisKegiatan dan fieldValues
  const kegiatan: KegiatanWithRelations | null = await getKegiatanById(id);

  if (!kegiatan) {
    notFound(); // Tampilkan 404 jika kegiatan tidak ditemukan
  }

  // Set dynamic breadcrumb for this page. Use the 'nama' of jenisKegiatan or a default title.
  // The ID is the dynamic segment, and the display name should be a human-readable title.
  // For 'Detail Kegiatan', the specific activity's title might be more appropriate.
  const activityTitle = kegiatan.jenisKegiatan.nama || "Detail Kegiatan"; // Use jenisKegiatan nama as default breadcrumb
  // You could also try to get a 'judul' field from fieldValues if it exists
  const judulField = kegiatan.fieldValues.find(
    (fv) =>
      fv.jenisKegiatanField.templateKey === "judul" ||
      fv.jenisKegiatanField.fieldName.toLowerCase() === "judul"
  );
  if (judulField && judulField.value) {
    // If a 'judul' field value exists, use it for the breadcrumb display name
    // It's good practice to truncate long titles for breadcrumbs
    const displayJudul =
      judulField.value.length > 30
        ? `${judulField.value.substring(0, 27)}...`
        : judulField.value;
    // SetBreadcrumbSegment pathSegment={id} displayName={displayJudul}
  }

  // Tidak perlu lagi memproses programStudiFields secara terpisah di sini
  // karena field definitions sekarang ada di kegiatan.jenisKegiatan.fields dan fieldValues di kegiatan.fieldValues

  return (
    <>
      <div className="pb-2">
        <KegiatanDetailClient
          // Teruskan objek kegiatan lengkap, yang sudah memiliki semua relasi yang diperlukan
          kegiatan={kegiatan}
          // programStudiFields tidak lagi diperlukan sebagai prop terpisah
        />
      </div>
    </>
  );
}
