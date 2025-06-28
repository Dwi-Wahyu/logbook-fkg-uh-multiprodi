// src/app/admin/kegiatan/_components/KegiatanTable.tsx
"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Loader2, PlusCircle, Trash2, Edit, Eye } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  deleteKegiatan,
  updateKegiatanStatus,
} from "@/app/_lib/actions/kegiatanActions";
import { toast } from "sonner";
import { CustomToast } from "@/components/toast";
import Link from "next/link";

// Import the exact type from your queries file
import { KegiatanWithRelations } from "@/app/_lib/queries/kegiatanQueries";

// REMOVE the manual Kegiatan type definition as it will now be imported
// type Kegiatan = { ... };

type MataKuliahOption = {
  id: number;
  judul: string;
  semester: number;
};

// Props yang diterima dari Server Component (page.tsx)
interface KegiatanTableProps {
  initialKegiatanList: KegiatanWithRelations[]; // Use the imported type here
  initialPageCount: number;
  initialFilteredCount: number;
  allMataKuliah: MataKuliahOption[];
  currentSearchParams: {
    page?: string;
    perPage?: string;
    status?: "DIAJUKAN" | "DISETUJUI" | "DITOLAK" | null; // Keep null as per previous discussion
    mataKuliahId?: string;
  };
}

export default function KegiatanTable({
  initialKegiatanList,
  initialPageCount,
  initialFilteredCount,
  allMataKuliah,
  currentSearchParams,
}: KegiatanTableProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  // Ensure the state uses the correct type as well
  const [data, setData] =
    useState<KegiatanWithRelations[]>(initialKegiatanList);
  const [pageCount, setPageCount] = useState(initialPageCount);
  const [filteredCount, setFilteredCount] = useState(initialFilteredCount);

  // State untuk filter dan pagination
  const [page, setPage] = useState(parseInt(currentSearchParams.page || "1"));
  const [perPage, setPerPage] = useState(
    parseInt(currentSearchParams.perPage || "10")
  );
  const [statusFilter, setStatusFilter] = useState(
    currentSearchParams.status || "all" // 'all' can be a string, not necessarily part of the enum
  );
  const [mataKuliahFilter, setMataKuliahFilter] = useState(
    currentSearchParams.mataKuliahId || "all"
  );

  useEffect(() => {
    setData(initialKegiatanList);
    setPageCount(initialPageCount);
    setFilteredCount(initialFilteredCount);
    setPage(parseInt(currentSearchParams.page || "1"));
    setPerPage(parseInt(currentSearchParams.perPage || "10"));
    // Ensure statusFilter handles 'null' by converting it to 'all' or similar default
    setStatusFilter(
      currentSearchParams.status === null
        ? "all"
        : currentSearchParams.status || "all"
    );
    setMataKuliahFilter(currentSearchParams.mataKuliahId || "all");
  }, [
    initialKegiatanList,
    initialPageCount,
    initialFilteredCount,
    currentSearchParams,
  ]);

  const applyFiltersAndNavigate = () => {
    startTransition(() => {
      const params = new URLSearchParams();
      params.set("page", page.toString());
      params.set("perPage", perPage.toString());

      // If statusFilter is 'all', delete the parameter. Otherwise, set it.
      if (statusFilter && statusFilter !== "all") {
        params.set("status", statusFilter);
      } else {
        params.delete("status");
      }

      // If mataKuliahFilter is 'all', delete the parameter. Otherwise, set it.
      if (mataKuliahFilter && mataKuliahFilter !== "all") {
        params.set("mataKuliahId", mataKuliahFilter);
      } else {
        params.delete("mataKuliahId");
      }

      router.push(`/admin/kegiatan?${params.toString()}`);
    });
  };

  const handleSearch = () => {
    setPage(1); // Reset to first page on new search
    applyFiltersAndNavigate();
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    applyFiltersAndNavigate();
  };

  // IMPORTANT: Replace confirm() with a custom modal UI as per guidelines
  const handleDelete = async (id: string) => {
    // Replace with a custom modal for confirmation
    const isConfirmed = window.confirm(
      "Apakah Anda yakin ingin menghapus kegiatan ini?"
    ); // Placeholder for custom modal
    if (isConfirmed) {
      const result = await deleteKegiatan(id);
      if (result.success) {
        toast.custom(() => (
          <CustomToast
            title="Kegiatan Berhasil Dihapus"
            description="Data kegiatan telah berhasil dihapus dari sistem."
            variant="success"
          />
        ));
        router.refresh();
      } else {
        toast.custom(() => (
          <CustomToast
            title="Gagal Menghapus Kegiatan"
            description={
              result.message || "Terjadi kesalahan saat menghapus kegiatan."
            }
            variant="destructive"
          />
        ));
      }
    }
  };

  const handleUpdateStatus = async (
    kegiatanId: string,
    newStatus: "DIAJUKAN" | "DISETUJUI" | "DITOLAK"
  ) => {
    let alasanDitolak: string | undefined = undefined;
    if (newStatus === "DITOLAK") {
      // IMPORTANT: Replace prompt() with a custom modal UI as per guidelines
      const promptResult = window.prompt("Masukkan alasan penolakan:"); // Placeholder for custom modal
      if (promptResult === null || promptResult === "") {
        toast.custom(() => (
          <CustomToast
            title="Aksi Dibatalkan"
            description="Penolakan kegiatan dibatalkan karena alasan tidak diisi."
            variant="info"
          />
        ));
        return;
      }
      alasanDitolak = promptResult;
    }

    const result = await updateKegiatanStatus({
      kegiatanId,
      status: newStatus,
      alasanDitolak,
    });
    if (result.success) {
      toast.custom(() => (
        <CustomToast
          title="Status Diperbarui"
          description={`Status kegiatan berhasil diubah menjadi ${newStatus}.`}
          variant="success"
        />
      ));
      router.refresh();
    } else {
      toast.custom(() => (
        <CustomToast
          title="Gagal Memperbarui Status"
          description={"Terjadi kesalahan saat memperbarui status."}
          variant="destructive"
        />
      ));
    }
  };

  return (
    <Card className="w-full shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">
          Daftar Kegiatan
        </CardTitle>
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
          <div className="flex flex-wrap items-center gap-3">
            <Select
              value={statusFilter}
              onValueChange={(
                value: "DIAJUKAN" | "DISETUJUI" | "DITOLAK" | "all"
              ) => setStatusFilter(value)} // Type assertion for clarity
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Status</SelectItem>
                <SelectItem value="DIAJUKAN">Diajukan</SelectItem>
                <SelectItem value="DISETUJUI">Disetujui</SelectItem>
                <SelectItem value="DITOLAK">Ditolak</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={mataKuliahFilter}
              onValueChange={setMataKuliahFilter}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter Mata Kuliah" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Mata Kuliah</SelectItem>
                {allMataKuliah.map((mk) => (
                  <SelectItem key={mk.id} value={mk.id.toString()}>
                    {mk.judul} (Sm. {mk.semester})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button onClick={handleSearch} disabled={isPending}>
              {isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
              Terapkan Filter
            </Button>
          </div>
          <Link href="/admin/kegiatan/tambah-kegiatan">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" /> Tambah Kegiatan
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-gray-600 mb-4">
          Total Kegiatan: {filteredCount}
        </p>
        {isPending && data.length === 0 ? (
          <div className="flex justify-center items-center h-40">
            <Loader2 className="animate-spin" size={32} />
            <span className="ml-2">Memuat data...</span>
          </div>
        ) : data.length === 0 ? (
          <div className="text-center p-8 text-gray-500">
            Tidak ada kegiatan yang ditemukan.
          </div>
        ) : (
          <div className="relative w-full overflow-auto">
            <Table className="min-w-full bg-white">
              <TableHeader>
                <TableRow>
                  <TableHead>No</TableHead>
                  <TableHead>Mata Kuliah</TableHead>
                  <TableHead>Pengaju</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Tanggal Dibuat</TableHead>
                  <TableHead className="text-center">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((kegiatan, index) => (
                  <TableRow key={kegiatan.id}>
                    <TableCell>{(page - 1) * perPage + index + 1}</TableCell>
                    <TableCell>
                      {kegiatan.MataKuliah.judul} (Sm.
                      {kegiatan.MataKuliah.semester})
                    </TableCell>
                    <TableCell>
                      {kegiatan.logbook.mahasiswa.pengguna.nama}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold
                          ${
                            kegiatan.status === "DISETUJUI"
                              ? "bg-green-100 text-green-800"
                              : ""
                          }
                          ${
                            kegiatan.status === "DIAJUKAN"
                              ? "bg-yellow-100 text-yellow-800"
                              : ""
                          }
                          ${
                            kegiatan.status === "DITOLAK"
                              ? "bg-red-100 text-red-800"
                              : ""
                          }
                        `}
                      >
                        {kegiatan.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      {new Date(kegiatan.createdAt).toLocaleDateString("id-ID")}
                    </TableCell>
                    <TableCell className="flex space-x-2 justify-center">
                      <Link href={`/admin/kegiatan/detail/${kegiatan.id}`}>
                        <Button variant="outline" size="sm" className="p-2">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href={`/admin/kegiatan/edit/${kegiatan.id}`}>
                        <Button variant="outline" size="sm" className="p-2">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
                      {/* Uncomment if status-based buttons are needed
                      {kegiatan.status === "DIAJUKAN" && (
                        <>
                          <Button
                            size="sm"
                            className="p-2"
                            onClick={() =>
                              handleUpdateStatus(kegiatan.id, "DISETUJUI")
                            }
                          >
                            Setujui
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            className="p-2"
                            onClick={() =>
                              handleUpdateStatus(kegiatan.id, "DITOLAK")
                            }
                          >
                            Tolak
                          </Button>
                        </>
                      )} */}
                      <Button
                        variant="destructive"
                        size="sm"
                        className="p-2"
                        onClick={() => handleDelete(kegiatan.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange(Math.max(1, page - 1))}
                className={
                  page === 1 ? "pointer-events-none opacity-50" : undefined
                }
              />
            </PaginationItem>
            {Array.from({ length: pageCount }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  isActive={page === i + 1}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={() => handlePageChange(Math.min(pageCount, page + 1))}
                className={
                  page === pageCount
                    ? "pointer-events-none opacity-50"
                    : undefined
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardContent>
    </Card>
  );
}
