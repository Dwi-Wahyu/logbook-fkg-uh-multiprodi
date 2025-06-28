// src/app/_components/kegiatan/TambahKegiatanForm.tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  tambahKegiatanSchema,
  TTambahKegiatan,
  validLampiranExtensions,
} from "@/schema/kegiatan/TambahKegiatanSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CloudUpload, Loader2, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  tambahKegiatan,
  fetchProgramStudiFieldsAction,
} from "@/app/_lib/actions/kegiatanActions";
import { toast } from "sonner";

import { useRouter } from "next/navigation";
import { CustomToast } from "@/components/toast";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type MataKuliahWithProgramStudiId = {
  id: number;
  judul: string;
  semester: number;
  programStudiId: string | null;
};

type ProgramStudiField = {
  id: string;
  fieldName: string;
  fieldType: string;
  isRequired: boolean;
  order: number;
};

export default function TambahKegiatanForm({
  allMataKuliah,
  pengajuId,
}: {
  allMataKuliah: MataKuliahWithProgramStudiId[];
  pengajuId: string;
}) {
  const [loading, setLoading] = useState(false);
  const [selectedMataKuliahId, setSelectedMataKuliahId] = useState<
    string | null
  >(null);
  const [programStudiFields, setProgramStudiFields] = useState<
    ProgramStudiField[]
  >([]);
  const [loadingFields, setLoadingFields] = useState(false);
  const router = useRouter();

  const form = useForm<TTambahKegiatan>({
    resolver: zodResolver(tambahKegiatanSchema),
    defaultValues: {
      mata_kuliahId: "0",
      pengajuId,
      lampiran: [],
      status: "DIAJUKAN",
      fieldsData: {}, // Inisialisasi fieldsData kosong
    },
  });

  useEffect(() => {
    async function fetchFields() {
      if (selectedMataKuliahId && selectedMataKuliahId !== "0") {
        setLoadingFields(true);
        const selectedMataKuliah = allMataKuliah.find(
          (mk) => mk.id.toString() === selectedMataKuliahId
        );
        if (selectedMataKuliah?.programStudiId) {
          const fields = await fetchProgramStudiFieldsAction(
            selectedMataKuliah.programStudiId
          );
          setProgramStudiFields(fields);

          // Inisialisasi fieldsData dengan nilai default yang terdefinisi
          const newFieldsData: { [key: string]: any } = {};
          fields.forEach((fieldDef) => {
            if (
              fieldDef.fieldType === "TEXT" ||
              fieldDef.fieldType === "TEXTAREA"
            ) {
              newFieldsData[fieldDef.fieldName] = "";
            } else if (fieldDef.fieldType === "NUMBER") {
              newFieldsData[fieldDef.fieldName] = 0; // Atau null, tapi pastikan komponen input bisa handle null
            } else if (fieldDef.fieldType === "DATE") {
              newFieldsData[fieldDef.fieldName] = undefined; // DatePickerWithRange handles undefined for initial state, adjust if using native input
            } else if (fieldDef.fieldType === "BOOLEAN") {
              newFieldsData[fieldDef.fieldName] = false;
            }
            // Tambahkan tipe lain jika ada
          });
          form.setValue("fieldsData", newFieldsData); // Set nilai default yang terdefinisi
        } else {
          setProgramStudiFields([]);
          form.setValue("fieldsData", {});
        }
        setLoadingFields(false);
      } else {
        setProgramStudiFields([]);
        form.setValue("fieldsData", {});
      }
    }
    fetchFields();
  }, [selectedMataKuliahId, allMataKuliah, form]);

  async function onSubmit(values: TTambahKegiatan) {
    setLoading(true);

    // KARENA 'tanggal' SUDAH TIDAK DI SCHEMATA, ANDA HARUS MENGAMBILNYA DARI FIELDSDATA JIKA ADA
    // Misalnya jika Anda punya field bernama 'tanggal_mulai' dan 'tanggal_selesai' di fieldsData
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

    const action = await tambahKegiatan(payloadToSend);

    if (action.success) {
      toast.custom(() => (
        <CustomToast
          title="Kegiatan Berhasil Ditambahkan"
          description="Rincian kegiatan Anda telah berhasil dicatat dalam sistem."
          variant="success"
        />
      ));
      form.reset();
    } else {
      toast.custom(() => (
        <CustomToast
          title="Gagal Menambahkan Kegiatan"
          description={
            "Terjadi kesalahan yang tidak diketahui. Mohon coba lagi."
          }
          variant="destructive"
        />
      ));
    }

    setLoading(false);
  }

  function handleKembali() {
    router.back();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card className="w-full shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="text-3xl font-bold text-gray-800">
              Formulir Pengajuan Kegiatan
            </CardTitle>
            <CardDescription className="text-md text-gray-600">
              Isi detail kegiatan yang akan Anda ajukan. Pastikan semua
              informasi terisi dengan benar.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {form.formState.errors.root && (
              <p className="text-red-600 text-sm font-medium p-3 bg-red-50 border border-red-200 rounded-md">
                {form.formState.errors.root.message}
              </p>
            )}

            {/* Pastikan tidak ada FormField untuk 'tanggal' jika sudah tidak di schema */}
            {/* Jika Anda ingin DatePickerWithRange, maka fieldsData['Tanggal Mulai'] dan fieldsData['Tanggal Selesai']
                harus di-handle di DatePickerWithRange component itu sendiri, dan DatePickerWithRange harus
                mengupdate fieldsData secara langsung. */}

            <FormField
              control={form.control}
              name="mata_kuliahId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mata Kuliah Terkait</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        setSelectedMataKuliahId(value);
                      }}
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
            {selectedMataKuliahId && selectedMataKuliahId !== "0" && (
              <div className="space-y-6 p-4 border rounded-md bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-700">
                  Detail Kegiatan (Sesuai Program Studi)
                </h3>
                {loadingFields ? (
                  <div className="flex justify-center items-center h-20">
                    <Loader2 className="animate-spin mr-2" /> Memuat detail
                    form...
                  </div>
                ) : programStudiFields.length > 0 ? (
                  programStudiFields.map((fieldDef) => (
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
                                // Pastikan nilai selalu string
                                value={field.value ?? ""}
                              />
                            ) : fieldDef.fieldType === "TEXTAREA" ? (
                              <Textarea
                                placeholder={`Masukkan ${fieldDef.fieldName.toLowerCase()}`}
                                {...field}
                                // Pastikan nilai selalu string
                                value={field.value ?? ""}
                              />
                            ) : fieldDef.fieldType === "NUMBER" ? (
                              <Input
                                type="number"
                                placeholder={`Masukkan ${fieldDef.fieldName.toLowerCase()}`}
                                {...field}
                                // Pastikan nilai selalu number atau string kosong untuk input type="number"
                                value={field.value ?? ""}
                                onChange={(e) =>
                                  field.onChange(
                                    // Mengubah ke number atau null jika kosong
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
                                // Pastikan nilai selalu string format YYYY-MM-DD atau ""
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
                                      : undefined // Tetap undefined jika tidak ada nilai
                                  )
                                }
                              />
                            ) : fieldDef.fieldType === "BOOLEAN" ? (
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  checked={field.value === true} // Pastikan field.value adalah boolean
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
                                value={field.value ?? ""} // Fallback value
                              />
                            )}
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))
                ) : (
                  <p className="text-gray-500 text-sm">
                    Tidak ada field kustom yang ditentukan untuk Program Studi
                    ini.
                  </p>
                )}
              </div>
            )}

            <FormField
              control={form.control}
              name="lampiran"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lampiran Pendukung</FormLabel>
                  <FormControl>
                    <FileUpload
                      onValueChange={field.onChange}
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
                      maxFiles={3}
                      maxSize={50 * 1024 * 1024}
                      onFileReject={(_, message) => {
                        form.setError("lampiran", {
                          message,
                        });
                      }}
                      multiple
                    >
                      <FileUploadDropzone className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-md text-center text-gray-600 hover:border-blue-500 transition-colors">
                        <CloudUpload className="size-8 text-blue-500 mb-2" />
                        <p className="font-semibold mb-1">
                          Seret & Lepas file di sini atau
                        </p>
                        <FileUploadTrigger asChild>
                          <Button
                            variant="link"
                            size="sm"
                            className="p-0 text-blue-600 hover:text-blue-800"
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
                                <span className="sr-only">Hapus Lampiran</span>
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
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Mengirim...
                </>
              ) : (
                "Ajukan Kegiatan"
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
