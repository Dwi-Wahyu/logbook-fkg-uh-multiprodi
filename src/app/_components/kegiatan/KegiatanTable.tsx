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
import {
  Loader2,
  PlusCircle,
  Trash2,
  Edit,
  Eye,
  LucideSquareDashedMousePointer,
  Filter, // Import Filter icon
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import {
  Dialog, // Import Dialog for the filter modal
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

import {
  deleteKegiatan,
  updateKegiatanStatus,
} from "@/app/_lib/actions/kegiatanActions";
import { toast } from "sonner";
import { CustomToast } from "@/components/toast";
import Link from "next/link";

import {
  KegiatanWithRelations,
  FieldValueWithDefinition,
  getAllJenisKegiatan,
} from "@/app/_lib/queries/kegiatanQueries";
import { useSession } from "next-auth/react";
import { type SearchParams } from "nuqs/server";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

type MataKuliahOption = {
  id: number;
  judul: string;
  semester: number;
};

type JenisKegiatanOption = Awaited<
  ReturnType<typeof getAllJenisKegiatan>
>[number];

interface KegiatanTableProps {
  initialKegiatanList: KegiatanWithRelations[];
  initialPageCount: number;
  initialFilteredCount: number;
  allMataKuliah: MataKuliahOption[];
  allJenisKegiatan: JenisKegiatanOption[];
  currentSearchParams: SearchParams;
}

export default function KegiatanTable({
  initialKegiatanList,
  initialPageCount,
  initialFilteredCount,
  allMataKuliah,
  allJenisKegiatan,
  currentSearchParams,
}: KegiatanTableProps) {
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

  // State untuk kontrol Dialog Filter
  const [isFilterDialogOpen, setIsFilterDialogOpen] = useState(false);

  const [page, setPage] = useState(
    parseInt(currentSearchParams.page?.toString() || "1")
  );
  const [perPage, setPerPage] = useState(
    parseInt(currentSearchParams.perPage?.toString() || "10")
  );
  const [statusFilter, setStatusFilter] = useState(
    currentSearchParams.status?.toString() === "null"
      ? "all"
      : currentSearchParams.status?.toString() || "all"
  );
  const [mataKuliahFilter, setMataKuliahFilter] = useState(
    currentSearchParams.mataKuliahId?.toString() || "all"
  );
  const [semesterFilter, setSemesterFilter] = useState(
    currentSearchParams.semester?.toString() === "null"
      ? "all"
      : currentSearchParams.semester?.toString() || "all"
  );
  const [jenisKegiatanFilter, setJenisKegiatanFilter] = useState(
    currentSearchParams.jenisKegiatanId?.toString() || "all"
  );
  const [filterAllProgramStudi, setFilterAllProgramStudi] = useState(
    currentSearchParams.filterAllProgramStudi === "true"
  );

  useEffect(() => {
    setData(initialKegiatanList);
    setPageCount(initialPageCount);
    setFilteredCount(initialFilteredCount);
    setPage(parseInt(currentSearchParams.page?.toString() || "1"));
    setPerPage(parseInt(currentSearchParams.perPage?.toString() || "10"));
    setStatusFilter(
      currentSearchParams.status?.toString() === "null"
        ? "all"
        : currentSearchParams.status?.toString() || "all"
    );
    setMataKuliahFilter(currentSearchParams.mataKuliahId?.toString() || "all");
    setSemesterFilter(
      currentSearchParams.semester?.toString() === "null"
        ? "all"
        : currentSearchParams.semester?.toString() || "all"
    );
    setJenisKegiatanFilter(
      currentSearchParams.jenisKegiatanId?.toString() || "all"
    );
    setFilterAllProgramStudi(
      currentSearchParams.filterAllProgramStudi === "true"
    );
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

      if (statusFilter && statusFilter !== "all")
        params.set("status", statusFilter);
      else params.delete("status");

      if (mataKuliahFilter && mataKuliahFilter !== "all")
        params.set("mataKuliahId", mataKuliahFilter);
      else params.delete("mataKuliahId");

      if (semesterFilter && semesterFilter !== "all")
        params.set("semester", semesterFilter);
      else params.delete("semester");

      if (jenisKegiatanFilter && jenisKegiatanFilter !== "all")
        params.set("jenisKegiatanId", jenisKegiatanFilter);
      else params.delete("jenisKegiatanId");

      if (filterAllProgramStudi) params.set("filterAllProgramStudi", "true");
      else params.delete("filterAllProgramStudi");

      router.push(`/admin/kegiatan?${params.toString()}`);
    });
  };

  const handleApplyFilters = () => {
    setPage(1); // Reset page to 1 when filters are applied
    applyFiltersAndNavigate();
    setIsFilterDialogOpen(false); // Close the filter dialog
  };

  const handleResetFilters = () => {
    setPage(1);
    setPerPage(10);
    setStatusFilter("all");
    setMataKuliahFilter("all");
    setSemesterFilter("all");
    setJenisKegiatanFilter("all");
    setFilterAllProgramStudi(false); // Reset switch

    // Clear all params from URL
    startTransition(() => {
      const params = new URLSearchParams(); // Create empty params
      params.set("page", "1");
      params.set("perPage", "10");
      router.push(`/admin/kegiatan?${params.toString()}`);
      setIsFilterDialogOpen(false); // Close the filter dialog
    });
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    applyFiltersAndNavigate();
  };

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

      window.location.reload();
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

  const handleUpdateStatus = async (
    kegiatanId: string,
    newStatus: "DIAJUKAN" | "DISETUJUI" | "DITOLAK"
  ) => {
    let alasanDitolak: string | undefined = undefined;
    if (newStatus === "DITOLAK") {
      const promptResult = window.prompt("Masukkan alasan penolakan:");
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
          description={
            result.message || "Terjadi kesalahan saat memperbarui status."
          }
          variant="destructive"
        />
      ));
    }
  };

  const session = useSession();
  const isDosen = session.data?.user.peran === "DOSEN";
  const isMahasiswa = session.data?.user.peran === "MAHASISWA";
  const isAdminOrSuperadmin =
    session.data?.user.peran === "ADMIN" ||
    session.data?.user.peran === "SUPERADMIN";

  const semesterOptions = Array.from({ length: 14 }, (_, i) => i + 1);

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

  return (
    <Card className="w-full shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">
          Daftar Kegiatan
        </CardTitle>
        <div className="flex items-center justify-between gap-4 pt-4 flex-wrap">
          {/* Tombol Filter yang memicu Dialog */}
          <Dialog
            open={isFilterDialogOpen}
            onOpenChange={setIsFilterDialogOpen}
          >
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" /> Filter Kegiatan
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] rounded-xl p-6">
              <DialogHeader>
                <DialogTitle>Filter Kegiatan</DialogTitle>
                <DialogDescription>
                  Pilih kriteria untuk memfilter daftar kegiatan.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                {/* Status Filter */}
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Filter Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Status</SelectItem>
                    <SelectItem value="DIAJUKAN">Diajukan</SelectItem>
                    <SelectItem value="DISETUJUI">Disetujui</SelectItem>
                    <SelectItem value="DITOLAK">Ditolak</SelectItem>
                  </SelectContent>
                </Select>

                {/* Mata Kuliah Filter */}
                <Select
                  value={mataKuliahFilter}
                  onValueChange={setMataKuliahFilter}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Filter Mata Kuliah" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Mata Kuliah</SelectItem>
                    <SelectItem value="0">Tidak Ada Mata Kuliah</SelectItem>
                    {allMataKuliah.map((mk) => (
                      <SelectItem key={mk.id} value={mk.id.toString()}>
                        {mk.judul} (Sm. {mk.semester})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Semester Filter */}
                {(isMahasiswa || isDosen || isAdminOrSuperadmin) && (
                  <Select
                    value={semesterFilter}
                    onValueChange={setSemesterFilter}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Filter Semester" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Semua Semester</SelectItem>
                      {semesterOptions.map((s) => (
                        <SelectItem key={s} value={s.toString()}>
                          Semester {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}

                {/* Jenis Kegiatan Filter */}
                <Select
                  value={jenisKegiatanFilter}
                  onValueChange={setJenisKegiatanFilter}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Filter Jenis Kegiatan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Jenis Kegiatan</SelectItem>
                    {allJenisKegiatan.map((jk) => (
                      <SelectItem key={jk.id} value={jk.id}>
                        {jk.nama}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {isDosen && (
                  <div className="flex shadow-sm border rounded-lg px-3 py-2 gap-3 items-center">
                    <Switch
                      id="filterAllProgramStudi"
                      checked={filterAllProgramStudi}
                      onCheckedChange={setFilterAllProgramStudi} // Update state saat switch diubah
                    />
                    <Label className="text-sm" htmlFor="filterAllProgramStudi">
                      Tampilkan Semua Kegiatan Mahasiswa Program Studi Ini
                    </Label>
                  </div>
                )}
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={handleResetFilters}>
                  Reset Filter
                </Button>
                <Button onClick={handleApplyFilters} disabled={isPending}>
                  {isPending ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : null}
                  Terapkan Filter
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Add Kegiatan Button */}
          {isMahasiswa && (
            <Link href="/admin/kegiatan/tambah-kegiatan">
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" /> Tambah Kegiatan
              </Button>
            </Link>
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-sm text-gray-600 mb-4">
          Total Kegiatan: {filteredCount}
        </p>

        {/* Loading / No Data State */}
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
          // Data Table with horizontal scroll
          <div className="relative w-full overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <Table className="min-w-full bg-white">
              <TableHeader>
                <TableRow>
                  <TableHead className="">No</TableHead>
                  <TableHead className="">Jenis Kegiatan</TableHead>
                  <TableHead className="">Mata Kuliah</TableHead>
                  <TableHead className="">Pengaju</TableHead>
                  <TableHead className="">Status</TableHead>
                  {/* <TableHead className="">Tanggal Dibuat</TableHead> */}
                  <TableHead className=" text-center">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((kegiatan, index) => {
                  const isDosenPembimbing =
                    session.data?.user.id ===
                    kegiatan.logbook.mahasiswa?.pembimbing?.pengguna.id;

                  return (
                    <TableRow key={kegiatan.id}>
                      <TableCell>{(page - 1) * perPage + index + 1}</TableCell>
                      <TableCell>{kegiatan.jenisKegiatan.nama}</TableCell>
                      <TableCell>
                        {kegiatan.MataKuliah?.judul
                          ? `${kegiatan.MataKuliah.judul} (Sm. ${kegiatan.MataKuliah.semester})`
                          : "-"}
                      </TableCell>
                      <TableCell>
                        {kegiatan.logbook.mahasiswa?.pengguna.nama || "-"}
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
                      {/* <TableCell>
                        {new Date(kegiatan.createdAt).toLocaleDateString(
                          "id-ID"
                        )}
                      </TableCell> */}
                      <TableCell className="flex space-x-2 justify-center">
                        {/* Actions for Mahasiswa or Admin/Superadmin */}
                        {(isMahasiswa || isAdminOrSuperadmin) && (
                          <>
                            <Link
                              href={`/admin/kegiatan/detail/${kegiatan.id}`}
                            >
                              <Button
                                variant="outline"
                                size="sm"
                                className="p-2"
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                            </Link>
                            {isMahasiswa && kegiatan.status === "DIAJUKAN" && (
                              <Link
                                href={`/admin/kegiatan/edit/${kegiatan.id}`}
                              >
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="p-2"
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                              </Link>
                            )}
                            <Button
                              variant="destructive"
                              size="sm"
                              className="p-2"
                              onClick={() => handleDeleteClick(kegiatan.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </>
                        )}

                        {/* Actions for Dosen or Admin/Superadmin (without duplicating Detail if already present) */}
                        {(isDosen || isAdminOrSuperadmin) && (
                          <>
                            {!(isMahasiswa || isAdminOrSuperadmin) && (
                              <Link
                                href={`/admin/kegiatan/detail/${kegiatan.id}`}
                              >
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="p-2"
                                >
                                  Detail
                                </Button>
                              </Link>
                            )}
                            {isDosenPembimbing && (
                              <>
                                <Button
                                  size="sm"
                                  className="p-2"
                                  disabled={kegiatan.status === "DISETUJUI"}
                                  onClick={() =>
                                    handleUpdateStatus(kegiatan.id, "DISETUJUI")
                                  }
                                >
                                  Approve
                                </Button>
                                <Button
                                  variant="destructive"
                                  size="sm"
                                  disabled={kegiatan.status === "DITOLAK"}
                                  className="p-2"
                                  onClick={() =>
                                    handleUpdateStatus(kegiatan.id, "DITOLAK")
                                  }
                                >
                                  Tolak
                                </Button>
                              </>
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
      </CardContent>

      {/* AlertDialog for Delete Confirmation */}
      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent className="rounded-xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl font-bold text-gray-900">
              Konfirmasi Menghapus Kegiatan
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-700">
              Anda yakin ingin menghapus kegiatan ini secara permanen? Tindakan
              ini tidak dapat dibatalkan.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel asChild>
              <Button variant="outline" className="px-5 py-2 rounded-md">
                Batal
              </Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button
                onClick={handleConfirmDelete}
                disabled={isDeleting}
                className="px-5 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white"
              >
                {isDeleting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                    Menghapus...
                  </>
                ) : (
                  "Ya, Hapus"
                )}
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
}
