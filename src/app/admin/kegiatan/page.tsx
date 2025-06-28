// src/app/admin/kegiatan/page.tsx
import { Suspense } from "react";
import { SearchParams } from "nuqs/server"; // Import SearchParams from nuqs/server

import {
  getKegiatan,
  getAllMataKuliah,
} from "@/app/_lib/queries/kegiatanQueries";
import { auth } from "@/config/auth";
import { redirect } from "next/navigation";
import KegiatanTable from "@/app/_components/kegiatan/KegiatanTable";
import { kegiatanSearchParams } from "@/app/_lib/validations/kegiatanSearchParams"; // Import the new search params schema
import { DatatableSkeleton } from "@/components/datatable/datatable-skeleton"; // Assuming you have this skeleton component

// Update the interface to use SearchParams from nuqs/server
interface KegiatanListPageProps {
  searchParams: Promise<SearchParams>;
}

export default async function KegiatanListPage({
  searchParams: searchParamsPromise, // Rename to avoid conflict with parsed searchParams
}: KegiatanListPageProps) {
  const session = await auth();

  if (!session || !session.user || !session.user.id) {
    redirect("/auth/login"); // Redirect if no session
  }

  // Await and parse the searchParams using nuqs/server cache
  const rawSearchParams = await searchParamsPromise;
  const search = kegiatanSearchParams.parse(rawSearchParams);

  // Ambil data kegiatan dari server menggunakan query server-only
  const {
    data: kegiatanList,
    pageCount,
    filtered,
  } = await getKegiatan({
    page: search.page,
    perPage: search.perPage,
    judul: search.judul, // Use parsed judul
    status: search.status, // Use parsed status
    mataKuliahId: search.mataKuliahId, // Use parsed mataKuliahId
    semester: search.semester,
  });

  console.log(kegiatanList);

  // Ambil semua mata kuliah untuk filter dropdown
  const allMataKuliah = await getAllMataKuliah();

  return (
    <div className="container mx-auto">
      <Suspense fallback={<DatatableSkeleton />}>
        <KegiatanTable
          initialKegiatanList={kegiatanList}
          initialPageCount={pageCount}
          initialFilteredCount={filtered}
          allMataKuliah={allMataKuliah}
          currentSearchParams={rawSearchParams}
        />
      </Suspense>
    </div>
  );
}
