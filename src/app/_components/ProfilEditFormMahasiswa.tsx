// src/app/(dashboard)/profil/edit-form.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, FilePenLine, Loader, Save } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useEffect, useMemo, useState } from "react";
import {
  editProfilPenggunaSchema,
  TEditProfilPengguna,
} from "@/schema/EditProfilSchema";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getNameInitials } from "@/service/getNameInitials";
import { editProfilPengguna } from "../_lib/actions/penggunaActions";
import { getProfilPengguna } from "../_lib/queries/penggunaQueries";
import { CustomToast } from "@/components/toast";
import { useSession } from "next-auth/react";
import { Label } from "@/components/ui/label";

type ProfilPengguna = Awaited<ReturnType<typeof getProfilPengguna>>;

export default function ProfilEditFormMahasiswa({
  id,
  initialData,
}: {
  id: string;
  initialData: ProfilPengguna;
}) {
  const [editForm, setEditForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const session = useSession();

  const form = useForm<TEditProfilPengguna>({
    resolver: zodResolver(editProfilPenggunaSchema),
    defaultValues: {
      semester: initialData?.mahasiswa?.semester || 0,
      judulDisertasi: initialData?.mahasiswa?.judulDisertasi || "",
      email: initialData?.mahasiswa?.email || "",
      nomorTelpon: initialData?.mahasiswa?.nomorTelpon || "",
      angkatan: initialData?.mahasiswa?.angkatan || "",
      tahunLulus: initialData?.mahasiswa?.tahunLulus || "",
      mulaiMasukPendidikan: initialData?.mahasiswa?.mulaiMasukPendidikan as
        | Date
        | undefined,
      tempatTanggalLahir: initialData?.mahasiswa?.tempatTanggalLahir || "",
      alamat: initialData?.mahasiswa?.alamat || "",
      alamatKeluarga: initialData?.mahasiswa?.alamatKeluarga || "",
      pekerjaan: initialData?.mahasiswa?.pekerjaan || "",
    },
  });

  const showAlert = useMemo(() => {
    const dataLengkap =
      initialData?.mahasiswa?.semester &&
      initialData?.mahasiswa?.judulDisertasi &&
      initialData?.mahasiswa?.email &&
      initialData?.mahasiswa?.nomorTelpon &&
      initialData?.mahasiswa?.alamat &&
      initialData?.mahasiswa?.alamatKeluarga &&
      initialData?.mahasiswa?.tahunLulus &&
      initialData?.mahasiswa?.pekerjaan &&
      initialData?.mahasiswa?.mulaiMasukPendidikan;

    return !dataLengkap;
  }, [initialData]);

  const onSubmit = async (payload: any) => {
    try {
      setLoading(true);

      const promise = await editProfilPengguna(id, payload);

      if (promise.success) {
        toast.custom(() => (
          <CustomToast
            title="Profil Terupdate"
            description="Perubahan data profil Anda telah berhasil disimpan."
            variant="success"
          />
        ));
        setEditForm(false);
      }

      setLoading(false);
    } catch (error) {
      toast.error("Gagal memperbarui profil");
    }
  };

  useEffect(() => {
    if (showAlert) {
      setEditForm(true);
    }
  }, [showAlert]);

  return (
    <Form {...form}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-lg border items-center p-4 flex gap-4">
          <Avatar className="h-10 w-10 rounded-lg">
            <AvatarImage
              src={`/image/profile-picture/${initialData?.mahasiswa?.pembimbing?.pengguna.avatar}`}
              alt="foto-profil"
            />
            <AvatarFallback className="rounded-lg">
              {getNameInitials(
                initialData?.mahasiswa?.pembimbing?.pengguna.nama ?? "? ?"
              )}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-semibold">Pembimbing</h1>
            <h1 className="text-sm">
              {initialData?.mahasiswa?.pembimbing?.pengguna.nama ??
                "Belum menetapkan pembimbing"}
            </h1>
          </div>
        </div>
      </div>

      {showAlert && (
        <Alert variant={"destructive"}>
          <AlertTitle>Alert !</AlertTitle>
          <AlertDescription>Tolong lengkapi data berikut ini.</AlertDescription>
        </Alert>
      )}

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Section: Data Dasar */}
        <div className="space-y-4">
          <Label htmlFor="program_studi">Program Studi</Label>
          <Input
            id="program_studi"
            defaultValue={session.data?.user.programStudi}
            disabled
          />

          <FormField
            control={form.control}
            name="semester"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Semester</FormLabel>
                <FormControl>
                  <Input
                    disabled={!editForm}
                    placeholder="Contoh: 1, 3, atau 5"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="judulDisertasi"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Judul Disertasi</FormLabel>
                <FormControl>
                  <Input
                    disabled={!editForm}
                    placeholder="Contoh: 'Peran Mikrobioma Oral dalam Perkembangan Karies Gigi pada Anak dengan Diabetes Melitus Tipe 1: Studi Molekuler dan Klinis'"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    disabled={!editForm}
                    placeholder="Email aktif"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="nomorTelpon"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nomor Telepon</FormLabel>
                <FormControl>
                  <Input
                    disabled={!editForm}
                    placeholder="Nomor telepon aktif"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Section: Data Akademik */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="angkatan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Angkatan</FormLabel>
                  <FormControl>
                    <Input
                      disabled={!editForm}
                      placeholder="Tahun angkatan"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tahunLulus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tahun Lulus Magister/Spesialis</FormLabel>
                  <FormControl>
                    <Input
                      disabled={!editForm}
                      placeholder="Tahun lulus magister/spesialis"
                      maxLength={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mulaiMasukPendidikan"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Mulai Masuk Pendidikan Doktor FKG Unhas</FormLabel>
                  <Popover>
                    <PopoverTrigger disabled={!editForm} asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pilih tanggal</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Section: Data Pribadi */}
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="tempatTanggalLahir"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tempat/Tanggal Lahir</FormLabel>
                <FormControl>
                  <Input
                    disabled={!editForm}
                    placeholder="Contoh: Makassar, 1 Januari 1990"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="alamat"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Alamat Sekarang</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={!editForm}
                    placeholder="Alamat lengkap saat ini"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="alamatKeluarga"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Alamat Keluarga</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Alamat keluarga/orang tua"
                    disabled={!editForm}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="pekerjaan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pekerjaan</FormLabel>
                <FormControl>
                  <Input
                    disabled={!editForm}
                    placeholder="Pekerjaan saat ini"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-end gap-4">
          <Button
            onClick={() => setEditForm(false)}
            disabled={!editForm}
            type="button"
            variant="outline"
          >
            Batal
          </Button>
          {!editForm ? (
            <Button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setEditForm(true);
              }}
            >
              <FilePenLine />
              Edit Data
            </Button>
          ) : (
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {loading ? <Loader className="animate-spin" /> : <Save />}

              {form.formState.isSubmitting
                ? "Menyimpan..."
                : "Simpan Perubahan"}
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}
