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
import {
  Loader2,
  Eye,
  Edit,
  Trash2,
  Filter as FilterIcon, // Rename to avoid conflict with Filter component
} from "lucide-react";

import { CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { CustomToast } from "@/components/toast";
import Link from "next/link";

import {
  KegiatanWithRelations,
  getAllMataKuliah,
  getAllJenisKegiatan, // Untuk tipe JenisKegiatanOption
} from "@/app/_lib/queries/kegiatanQueries";
import {
  updateKegiatanStatus,
  deleteKegiatan,
} from "@/app/_lib/actions/kegiatanActions";
import { useSession } from "next-auth/react";

// Inferensi tipe untuk MataKuliahOption
type MataKuliahOption = Awaited<ReturnType<typeof getAllMataKuliah>>[number];
type JenisKegiatanData = Awaited<
  ReturnType<typeof getAllJenisKegiatan>
>[number]; // Tipe untuk jenisKegiatanData

interface KegiatanProgressTableProps {
  initialKegiatanList: KegiatanWithRelations[];
  initialPageCount: number;
  initialFilteredCount: number;
  allMataKuliah: MataKuliahOption[];
  jenisKegiatanData: JenisKegiatanData; // Data jenis kegiatan lengkap dari parent
  mahasiswaPenggunaId: string; // ID Pengguna mahasiswa
}

export default function KegiatanProgressTable({
  initialKegiatanList,
  initialPageCount,
  initialFilteredCount,
  jenisKegiatanData,
  mahasiswaPenggunaId,
}: KegiatanProgressTableProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [data, setData] =
    useState<KegiatanWithRelations[]>(initialKegiatanList);
  const [pageCount, setPageCount] = useState(initialPageCount);
  const [filteredCount, setFilteredCount] = useState(initialFilteredCount);

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [kegiatanToDeleteId, setKegiatanToDeleteId] = useState<string | null>(
    null
  );
  const [isDeleting, setIsDeleting] = useState(false);

  // Filter state (hanya status di sini)
  const [statusFilter, setStatusFilter] = useState("all"); // Default 'all'

  // Pagination states
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  // Sinkronkan data dari server props ke state komponen
  useEffect(() => {
    setData(initialKegiatanList);
    setPageCount(initialPageCount);
    setFilteredCount(initialFilteredCount);
    // Inisialisasi filter dari URL jika ada (tapi untuk halaman ini, status default 'all')
    const urlParams = new URLSearchParams(window.location.search);
    setStatusFilter(urlParams.get("status") || "all");
    setPage(parseInt(urlParams.get("page") || "1"));
    setPerPage(parseInt(urlParams.get("perPage") || "10"));
  }, [initialKegiatanList, initialPageCount, initialFilteredCount]);

  // Fungsi untuk menerapkan filter dan menavigasi
  const applyFiltersAndNavigate = () => {
    startTransition(() => {
      const params = new URLSearchParams();
      params.set("page", page.toString());
      params.set("perPage", perPage.toString());
      params.set("jenisKegiatanId", jenisKegiatanData.id); // Selalu sertakan jenisKegiatanId dari route params
      params.set("pengajuId", mahasiswaPenggunaId); // Selalu sertakan penggunaId dari route params

      if (statusFilter && statusFilter !== "all") {
        params.set("status", statusFilter);
      } else {
        params.delete("status");
      }

      // Bangun URL dengan route params dan search params
      router.push(
        `/admin/kegiatan/progress/${
          jenisKegiatanData.id
        }/${mahasiswaPenggunaId}?${params.toString()}`
      );
      router.refresh(); // Memaksa re-fetch data dari Server Component
    });
  };

  const handleApplyFilters = () => {
    setPage(1); // Reset halaman ke 1 saat filter baru diterapkan
    applyFiltersAndNavigate();
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    applyFiltersAndNavigate();
  };

  // --- LOGIKA DAN STATE UNTUK HAPUS KEGIATAN ---
  const handleDeleteClick = (kegiatanId: string) => {
    setKegiatanToDeleteId(kegiatanId);
    setIsDeleteDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!kegiatanToDeleteId) return;

    setIsDeleting(true);
    const result = await deleteKegiatan(kegiatanToDeleteId);
    setIsDeleting(false);

    if (result.success) {
      toast.custom(() => (
        <CustomToast
          title="Kegiatan Berhasil Dihapus"
          description={
            result.message ||
            "Data kegiatan telah berhasil dihapus dari sistem."
          }
          variant="success"
        />
      ));
      router.refresh(); // Re-fetch data untuk memperbarui tabel
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
    setIsDeleteDialogOpen(false);
    setKegiatanToDeleteId(null);
  };

  const session = useSession();
  const isMahasiswa = session.data?.user.peran === "MAHASISWA";
  const isAdminOrSuperadmin =
    session.data?.user.peran === "ADMIN" ||
    session.data?.user.peran === "SUPERADMIN";

  // Helper untuk mendapatkan nilai field kustom berdasarkan templateKey
  const getFieldValue = (
    kegiatan: KegiatanWithRelations,
    templateKey: string
  ) => {
    const fieldValue = kegiatan.fieldValues.find(
      (fv) => fv.jenisKegiatanField.templateKey === templateKey
    );
    return fieldValue?.value || "-";
  };

  // Helper untuk memformat nilai field berdasarkan fieldType
  const formatValueBasedOnType = (value: any, fieldType: string): string => {
    if (value === null || value === undefined || String(value).trim() === "") {
      return "-";
    }
    switch (fieldType) {
      case "DATE":
        try {
          const date = new Date(value);
          if (isNaN(date.getTime())) {
            return String(value);
          }
          return date.toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
        } catch {
          return String(value);
        }
      case "NUMBER":
        return Number(value).toLocaleString("id-ID");
      case "BOOLEAN":
        return value === "true" || value === true ? "Ya" : "Tidak";
      case "TEXTAREA":
        return String(value);
      default:
        return String(value);
    }
  };

  // Helper untuk mendapatkan status badge class
  const getStatusBadgeColorClass = (status: string) => {
    switch (status) {
      case "DISETUJUI":
        return "bg-green-100 text-green-800 border-green-200";
      case "DIAJUKAN":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "DITOLAK":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="pt-0">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        {/* Filter Status */}
        <Select value={statusFilter} onValueChange={setStatusFilter}>
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

        {/* Apply Filter Button */}
        <Button onClick={handleApplyFilters} disabled={isPending}>
          {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          Terapkan Filter
        </Button>
      </div>

      <p className="text-sm text-gray-600 my-4">
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
        <div className="relative w-full overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <Table className="min-w-full bg-white overflow-x-auto">
            <TableHeader>
              <TableRow>
                {jenisKegiatanData.fields.map((value) => (
                  <TableHead key={value.id}>{value.fieldName}</TableHead>
                ))}
                <TableHead>Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((kegiatan, index) => {
                const isDosenPembimbing =
                  session.data?.user.id ===
                  kegiatan.logbook.mahasiswa?.pembimbing?.pengguna.id;

                return (
                  <TableRow key={kegiatan.id}>
                    {jenisKegiatanData.fields.map((value) => (
                      <TableCell key={value.id}>
                        {formatValueBasedOnType(
                          getFieldValue(kegiatan, value.templateKey ?? ""),
                          value.fieldType
                        )}
                      </TableCell>
                    ))}

                    <TableCell className="flex space-x-2">
                      <Link href={`/admin/kegiatan/detail/${kegiatan.id}`}>
                        <Button variant="outline" size="sm" className="p-2">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                      {/* Aksi edit dan hapus (kondisional berdasarkan peran dan status) */}
                      {(isMahasiswa || isAdminOrSuperadmin) && (
                        <>
                          {isMahasiswa && kegiatan.status === "DIAJUKAN" && (
                            <Link href={`/admin/kegiatan/edit/${kegiatan.id}`}>
                              <Button
                                variant="outline"
                                size="sm"
                                className="p-2"
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                            </Link>
                          )}
                        </>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      )}

      {/* Pagination Controls */}
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
    </div>
  );
}
