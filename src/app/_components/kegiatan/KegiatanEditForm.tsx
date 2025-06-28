// src/app/admin/kegiatan/edit/_components/KegiatanEditForm.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadItem,
  FileUploadItemDelete,
  FileUploadItemMetadata,
  FileUploadItemPreview,
  FileUploadList,
  FileUploadTrigger,
} from "@/components/ui/file-upload";
import { CloudUpload, Loader2, X, Trash2, FileText } from "lucide-react";

import {
  editKegiatan,
  deleteLampiran,
} from "@/app/_lib/actions/kegiatanActions"; // Import editKegiatan dan deleteLampiran action
import { validLampiranExtensions } from "@/schema/kegiatan/TambahKegiatanSchema"; // Re-use schema
import { toast } from "sonner";
import { CustomToast } from "@/components/toast";
import {
  editKegiatanSchema,
  TEditKegiatan,
} from "@/schema/kegiatan/UpdateKegiatanSchema";
// import { DatePickerWithRange } from "../../_components/DatePickerWithRange"; // Hapus jika tidak ada field tanggal khusus

// Definisikan ulang tipe kegiatan dari props
type KegiatanProps = {
  id: string;
  fieldsData: Record<string, any> | null;
  status: string;
  createdAt: string;
  updatedAt: string;
  MataKuliah: {
    id: number; // Perlu ID mata kuliah untuk default value select
    judul: string;
    semester: number;
    programStudi: {
      id: string;
      nama: string;
      fields: Array<{
        id: string;
        fieldName: string;
        fieldType: string;
        isRequired: boolean;
        order: number;
      }>;
    };
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

type MataKuliahOption = {
  id: number;
  judul: string;
  semester: number;
  programStudiId: string | null;
};

type ProgramStudiField = {
  id: string;
  fieldName: string;
  fieldType: string; // "TEXT", "NUMBER", "DATE", "BOOLEAN", "TEXTAREA"
  isRequired: boolean;
  order: number;
};

interface KegiatanEditFormProps {
  kegiatan: KegiatanProps;
  allMataKuliah: MataKuliahOption[];
  programStudiFields: ProgramStudiField[]; // Fields definisi dari server
}

export default function KegiatanEditForm({
  kegiatan,
  allMataKuliah,
  programStudiFields,
}: KegiatanEditFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  // State untuk melacak lampiran yang sudah ada dan yang baru diupload
  const [existingAttachments, setExistingAttachments] = useState(
    kegiatan.lampiran
  );
  const [newlyUploadedFiles, setNewlyUploadedFiles] = useState<File[]>([]);

  const form = useForm<TEditKegiatan>({
    resolver: zodResolver(editKegiatanSchema),
    defaultValues: {
      id: kegiatan.id,
      mata_kuliahId: kegiatan.MataKuliah.id.toString(),
      status: kegiatan.status as
        | "DIAJUKAN"
        | "DISETUJUI"
        | "DITOLAK"
        | undefined,
      // Inisialisasi fieldsData dengan nilai yang ada
      fieldsData: kegiatan.fieldsData || {}, // Gunakan objek kosong jika null
      // Jika Anda memiliki field tanggal terpisah di schema (seperti tanggalMulai, tanggalSelesai)
      // maka perlu inisialisasi di sini:
      // tanggal: {
      //   from: kegiatan.tanggalMulai ? new Date(kegiatan.tanggalMulai) : undefined,
      //   to: kegiatan.tanggalSelesai ? new Date(kegiatan.tanggalSelesai) : undefined,
      // }
    },
  });

  // Effect untuk mengatur nilai default fieldsData setelah form dimuat dan fields definition ada
  useEffect(() => {
    const defaultFieldsData: Record<string, any> = {};
    programStudiFields.forEach((fieldDef) => {
      const existingValue = (kegiatan.fieldsData || {})[fieldDef.fieldName];
      if (existingValue !== undefined && existingValue !== null) {
        defaultFieldsData[fieldDef.fieldName] = existingValue;
      } else {
        // Berikan nilai default yang terdefinisi jika tidak ada nilai sebelumnya
        if (
          fieldDef.fieldType === "TEXT" ||
          fieldDef.fieldType === "TEXTAREA"
        ) {
          defaultFieldsData[fieldDef.fieldName] = "";
        } else if (fieldDef.fieldType === "NUMBER") {
          defaultFieldsData[fieldDef.fieldName] = null; // Gunakan null untuk number opsional
        } else if (fieldDef.fieldType === "DATE") {
          defaultFieldsData[fieldDef.fieldName] = undefined; // Date component handle undefined
        } else if (fieldDef.fieldType === "BOOLEAN") {
          defaultFieldsData[fieldDef.fieldName] = false;
        }
      }
    });
    form.reset({
      ...form.getValues(), // Pertahankan nilai lain seperti id, mata_kuliahId, status
      fieldsData: defaultFieldsData,
    });
  }, [programStudiFields, kegiatan.fieldsData, form]);

  const onSubmit = async (values: TEditKegiatan) => {
    setLoading(true);

    // KARENA 'tanggal' SUDAH TIDAK DI SCHEMATA, ANDA HARUS MENGAMBILNYA DARI FIELDSDATA JIKA ADA
    // Contoh jika Anda punya field bernama 'Tanggal Mulai' dan 'Tanggal Selesai' di fieldsData
    const tanggalMulaiValue = values.fieldsData["Tanggal Mulai"]
      ? new Date(values.fieldsData["Tanggal Mulai"])
      : undefined;
    const tanggalSelesaiValue = values.fieldsData["Tanggal Selesai"]
      ? new Date(values.fieldsData["Tanggal Selesai"])
      : undefined;

    // Anda perlu menyesuaikan payload yang dikirim ke action jika formatnya berbeda
    const payloadToSend = {
      ...values,
      // Jika tanggalMulai/Selesai tidak lagi di fieldsData tapi terpisah, Anda harus memasukannya ke sini
      // Contoh: tanggal: { from: tanggalMulaiValue, to: tanggalSelesaiValue },
      // Namun, jika schema.prisma Anda tidak punya tanggalMulai/Selesai, maka tetap kosongkan.
      // Jika fieldsData diharapkan menyimpan tanggal, maka fieldsData sudah benar.
    };

    const actionResult = await editKegiatan(payloadToSend);

    if (actionResult.success) {
      toast.custom(() => (
        <CustomToast
          title="Kegiatan Berhasil Diperbarui"
          description="Rincian kegiatan telah berhasil disimpan."
          variant="success"
        />
      ));
      // Karena lampiran baru tidak ditangani langsung oleh editKegiatan action,
      // Anda perlu logika terpisah untuk mengunggah 'newlyUploadedFiles'
      // Misalnya: await uploadLampiranToKegiatan(kegiatan.id, newlyUploadedFiles);
      router.push(`/admin/kegiatan/detail/${kegiatan.id}`); // Redirect ke halaman detail
    } else {
      toast.custom(() => (
        <CustomToast
          title="Gagal Memperbarui Kegiatan"
          description={
            "Terjadi kesalahan yang tidak diketahui. Mohon coba lagi."
          }
          variant="destructive"
        />
      ));
    }

    setLoading(false);
  };

  const handleRemoveExistingAttachment = async (lampiranId: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus lampiran ini?")) {
      const result = await deleteLampiran(lampiranId);
      if (result.success) {
        setExistingAttachments((prev) =>
          prev.filter((att) => att.id !== lampiranId)
        );
        toast.custom(() => (
          <CustomToast
            title="Lampiran Dihapus"
            description="Lampiran berhasil dihapus."
            variant="success"
          />
        ));
      } else {
        toast.custom(() => (
          <CustomToast
            title="Gagal Menghapus Lampiran"
            description={
              result.message || "Terjadi kesalahan saat menghapus lampiran."
            }
            variant="destructive"
          />
        ));
      }
    }
  };

  function handleKembali() {
    router.back();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card className="w-full shadow-lg max-w-4xl mx-auto">
          <CardHeader className="pb-4">
            <CardTitle className="text-3xl font-bold text-gray-800">
              Edit Data Kegiatan
            </CardTitle>
            <CardDescription className="text-md text-gray-600">
              Perbarui informasi kegiatan ini.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {form.formState.errors.root && (
              <p className="text-red-600 text-sm font-medium p-3 bg-red-50 border border-red-200 rounded-md">
                {form.formState.errors.root.message}
              </p>
            )}

            <FormField
              control={form.control}
              name="mata_kuliahId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mata Kuliah Terkait</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih Mata Kuliah yang relevan" />
                      </SelectTrigger>
                      <SelectContent>
                        {allMataKuliah.length > 0 ? (
                          allMataKuliah.map((value) => (
                            <SelectItem
                              key={value.id}
                              value={value.id.toString()}
                            >
                              {value.judul} (Semester {value.semester})
                            </SelectItem>
                          ))
                        ) : (
                          <SelectItem value="no-mata-kuliah" disabled>
                            Tidak ada mata kuliah tersedia
                          </SelectItem>
                        )}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Bagian Form Dinamis untuk fieldsData */}
            {programStudiFields && programStudiFields.length > 0 && (
              <div className="space-y-6 p-4 border rounded-md bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-700">
                  Detail Kegiatan (Sesuai Program Studi)
                </h3>
                {programStudiFields.map((fieldDef) => (
                  <FormField
                    key={fieldDef.id}
                    control={form.control}
                    name={`fieldsData.${fieldDef.fieldName}`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          {fieldDef.fieldName}{" "}
                          {fieldDef.isRequired && (
                            <span className="text-red-500">*</span>
                          )}
                        </FormLabel>
                        <FormControl>
                          {fieldDef.fieldType === "TEXT" ? (
                            <Input
                              placeholder={`Masukkan ${fieldDef.fieldName.toLowerCase()}`}
                              {...field}
                              value={field.value ?? ""}
                            />
                          ) : fieldDef.fieldType === "TEXTAREA" ? (
                            <Textarea
                              placeholder={`Masukkan ${fieldDef.fieldName.toLowerCase()}`}
                              {...field}
                              value={field.value ?? ""}
                            />
                          ) : fieldDef.fieldType === "NUMBER" ? (
                            <Input
                              type="number"
                              placeholder={`Masukkan ${fieldDef.fieldName.toLowerCase()}`}
                              {...field}
                              value={field.value ?? ""}
                              onChange={(e) =>
                                field.onChange(
                                  e.target.value === ""
                                    ? null
                                    : parseFloat(e.target.value)
                                )
                              }
                            />
                          ) : fieldDef.fieldType === "DATE" ? (
                            <Input
                              type="date"
                              placeholder={`Pilih tanggal ${fieldDef.fieldName.toLowerCase()}`}
                              {...field}
                              value={
                                field.value
                                  ? new Date(field.value)
                                      .toISOString()
                                      .split("T")[0]
                                  : ""
                              }
                              onChange={(e) =>
                                field.onChange(
                                  e.target.value
                                    ? new Date(e.target.value)
                                    : undefined
                                )
                              }
                            />
                          ) : fieldDef.fieldType === "BOOLEAN" ? (
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                checked={field.value === true}
                                onCheckedChange={(checked) =>
                                  field.onChange(checked)
                                }
                              />
                              <Label>{fieldDef.fieldName}</Label>
                            </div>
                          ) : (
                            <Input
                              placeholder={`Tipe input '${fieldDef.fieldType}' tidak didukung`}
                              disabled
                              value={field.value ?? ""}
                            />
                          )}
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
              </div>
            )}

            {/* Lampiran yang Sudah Ada */}
            {existingAttachments.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">
                  Lampiran Terunggah
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {existingAttachments.map((lampiran) => (
                    <div
                      key={lampiran.id}
                      className="flex items-center justify-between p-3 border rounded-md bg-gray-50"
                    >
                      <a
                        href={lampiran.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 flex-1 text-sm font-medium text-blue-600 hover:underline truncate"
                      >
                        <FileText className="h-4 w-4 shrink-0" />
                        <span>{lampiran.namaFile}</span>
                      </a>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-8 text-red-500 hover:bg-red-100 ml-2"
                        onClick={() =>
                          handleRemoveExistingAttachment(lampiran.id)
                        }
                        type="button" // Penting: type="button" agar tidak submit form
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Hapus</span>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Unggah Lampiran Baru (opsional, jika Anda ingin menambah lebih banyak) */}
            <FormField
              control={form.control}
              name="lampiran" // Menggunakan 'lampiran' dari schema untuk file baru
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Unggah Lampiran Baru</FormLabel>
                  <FormControl>
                    <FileUpload
                      onValueChange={(files) => {
                        field.onChange(files); // Update RHF value for Zod validation
                        setNewlyUploadedFiles(files); // Simpan di state terpisah untuk upload nanti
                      }}
                      accept={validLampiranExtensions
                        .map((ext) => {
                          switch (ext) {
                            case "png":
                              return "image/png";
                            case "jpeg":
                            case "jpg":
                              return "image/jpeg";
                            case "pdf":
                              return "application/pdf";
                            case "doc":
                              return "application/msword";
                            case "docx":
                              return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
                            default:
                              return "";
                          }
                        })
                        .join(",")}
                      maxFiles={3} // Batasi total lampiran, atau hanya file baru
                      maxSize={50 * 1024 * 1024}
                      multiple
                    >
                      <FileUploadDropzone className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-md text-center text-gray-600 hover:border-primary transition-colors">
                        <CloudUpload className="size-8 text-primary mb-2" />
                        <p className="font-semibold mb-1">
                          Seret & Lepas file di sini atau
                        </p>
                        <FileUploadTrigger asChild>
                          <Button
                            variant="link"
                            size="sm"
                            className="p-0 text-primary hover:text-primary"
                          >
                            Pilih File dari Komputer Anda
                          </Button>
                        </FileUploadTrigger>
                        <p className="text-xs mt-2">
                          Ukuran maksimal: 50MB per file. Jenis file yang
                          didukung: PNG, JPEG, JPG, PDF, DOC, DOCX. (Maks. 3
                          file)
                        </p>
                      </FileUploadDropzone>
                      <FileUploadList className="mt-4 space-y-2">
                        {field.value?.map((file, index) => (
                          <FileUploadItem
                            key={index}
                            value={file}
                            className="flex items-center justify-between p-2 border rounded-md bg-gray-50"
                          >
                            <FileUploadItemPreview className="size-8 rounded-full" />
                            <FileUploadItemMetadata className="flex-1 ml-3 text-sm" />
                            <FileUploadItemDelete asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="size-8 text-red-500 hover:bg-red-100"
                              >
                                <X className="size-4" />
                                <span className="sr-only">Delete</span>
                              </Button>
                            </FileUploadItemDelete>
                          </FileUploadItem>
                        ))}
                      </FileUploadList>
                    </FileUpload>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-end gap-4 border-t pt-4">
            <Button
              onClick={handleKembali}
              type="button"
              variant="outline"
              className="px-6 py-2"
            >
              Kembali
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Menyimpan...
                </>
              ) : (
                "Simpan Perubahan"
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
