// src/app/admin/kegiatan/detail/_components/KegiatanDetailClient.tsx
"use client";

import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Edit,
  Download,
  User,
  BookOpen,
  MapPin,
  Calendar,
  FileText,
  XCircle,
} from "lucide-react"; // Import ikon
import Link from "next/link";

interface KegiatanDetailClientProps {
  kegiatan: {
    id: string;
    fieldsData: Record<string, any> | null;
    status: string;
    createdAt: string; // Date akan menjadi string setelah JSON.stringify
    updatedAt: string; // Date akan menjadi string setelah JSON.stringify
    alasanDitolak?: string | null; // Tambahkan ini jika ada di model Prisma
    MataKuliah: {
      judul: string;
      semester: number;
    };
    logbook: {
      mahasiswa: {
        pengguna: {
          nama: string;
          username: string;
        };
      };
    };
    lampiran: Array<{
      id: string;
      namaFile: string;
      url: string;
    }>;
  };
  programStudiFields: Array<{
    fieldName: string;
    fieldType: string; // "TEXT", "NUMBER", "DATE", "BOOLEAN", "TEXTAREA"
    order: number;
  }>;
}

export default function KegiatanDetailClient({
  kegiatan,
  programStudiFields,
}: KegiatanDetailClientProps) {
  const router = useRouter();

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "DISETUJUI":
        return "default"; // shadcn default is blue-ish
      case "DIAJUKAN":
        return "secondary"; // shadcn secondary is gray-ish
      case "DITOLAK":
        return "destructive"; // shadcn destructive is red
      default:
        return "outline";
    }
  };

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

  // Fungsi untuk memformat nilai fieldsData berdasarkan fieldType
  const formatFieldValue = (value: any, fieldType: string) => {
    if (value === null || value === undefined || value === "") {
      return "-"; // Atau "Belum diisi"
    }
    switch (fieldType) {
      case "DATE":
        try {
          const date = new Date(value);
          return date.toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
        } catch {
          return String(value); // Fallback jika tanggal tidak valid
        }
      case "NUMBER":
        return Number(value).toLocaleString("id-ID");
      case "BOOLEAN":
        return value ? "Ya" : "Tidak";
      default:
        return String(value);
    }
  };

  // Mendapatkan judul dan lokasi dari fieldsData (jika ada)
  const judulKegiatan = kegiatan.fieldsData?.judul || "Judul Tidak Tersedia";
  const lokasiKegiatan = kegiatan.fieldsData?.lokasi || "Lokasi Tidak Tersedia";

  return (
    <Card className="w-full shadow-lg max-w-4xl mx-auto">
      <CardHeader className="pb-4 border-b">
        <div className="flex items-center justify-between mb-2">
          <Button
            variant="outline"
            onClick={() => router.back()}
            className="text-sm"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Kembali
          </Button>
          <div className="flex items-center space-x-2">
            <Link href={`/admin/kegiatan/edit/${kegiatan.id}`}>
              <Button variant="outline" size="sm">
                <Edit className="h-4 w-4 mr-2" /> Edit Kegiatan
              </Button>
            </Link>
          </div>
        </div>
        <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
          {judulKegiatan}
        </CardTitle>
        <CardDescription className="flex items-center text-gray-600">
          <MapPin className="h-4 w-4 mr-2" /> {lokasiKegiatan}
        </CardDescription>
        <div className="mt-4 flex items-center space-x-3">
          <Badge
            className={`${getStatusBadgeColorClass(
              kegiatan.status
            )} border px-3 py-1 text-sm`}
          >
            Status: {kegiatan.status}
          </Badge>
          <span className="text-sm text-gray-500 flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            Dibuat:{" "}
            {new Date(kegiatan.createdAt).toLocaleDateString("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          {kegiatan.status === "DITOLAK" && kegiatan.alasanDitolak && (
            <Badge variant="destructive" className="flex items-center text-sm">
              <XCircle className="h-4 w-4 mr-1" /> Alasan Ditolak:{" "}
              {kegiatan.alasanDitolak}
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        {/* Informasi Utama */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <h3 className="font-semibold text-gray-700">Mata Kuliah Terkait</h3>
            <p className="text-gray-900 flex items-center">
              <BookOpen className="h-4 w-4 mr-2 text-blue-500" />
              {kegiatan.MataKuliah.judul} (Semester{" "}
              {kegiatan.MataKuliah.semester})
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold text-gray-700">Diajukan Oleh</h3>
            <p className="text-gray-900 flex items-center">
              <User className="h-4 w-4 mr-2 text-green-500" />
              {kegiatan.logbook.mahasiswa.pengguna.nama} (NIM:{" "}
              {kegiatan.logbook.mahasiswa.pengguna.username})
            </p>
          </div>
        </div>

        <Separator />

        {/* Detail Dinamis dari fieldsData */}
        {programStudiFields && programStudiFields.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Detail Kegiatan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {programStudiFields.map((fieldDef) => {
                const value = kegiatan.fieldsData?.[fieldDef.fieldName];
                if (
                  value === undefined ||
                  value === null ||
                  String(value).trim() === ""
                )
                  return null; // Jangan tampilkan field kosong

                return (
                  <div key={fieldDef.fieldName} className="space-y-1">
                    <h3 className="font-semibold text-gray-700">
                      {fieldDef.fieldName}
                    </h3>
                    <p className="text-gray-900 break-words">
                      {formatFieldValue(value, fieldDef.fieldType)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <Separator />

        {/* Lampiran */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Lampiran ({kegiatan.lampiran.length})
          </h2>
          {kegiatan.lampiran.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {kegiatan.lampiran.map((lampiran) => (
                <a
                  key={lampiran.id}
                  href={lampiran.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 p-3 border rounded-md hover:bg-gray-50 transition-colors"
                >
                  <FileText className="h-5 w-5 text-blue-500" />
                  <span className="flex-1 text-sm font-medium text-gray-800 truncate">
                    {lampiran.namaFile}
                  </span>
                  <Download className="h-4 w-4 text-gray-500" />
                </a>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">
              Tidak ada lampiran untuk kegiatan ini.
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
