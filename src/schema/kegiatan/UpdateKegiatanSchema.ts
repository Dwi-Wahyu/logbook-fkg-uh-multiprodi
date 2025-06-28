import { z } from "zod";
import { kegiatanStatusEnum } from "./TambahKegiatanSchema";

export const editKegiatanSchema = z.object({
  id: z.string(), // ID Kegiatan untuk edit
  mata_kuliahId: z.string().min(1, { message: "Mata kuliah wajib dipilih." }),
  status: kegiatanStatusEnum,
  fieldsData: z.record(z.string(), z.any()),
  // **Tambahkan field 'lampiran' di sini untuk menampung file baru yang diunggah**
  lampiran: z
    .array(z.instanceof(File))
    .max(3, { message: "Maksimal 3 lampiran baru yang dapat diunggah." })
    .optional(), // Opsional karena mungkin tidak ada lampiran baru yang ditambahkan
});

export type TEditKegiatan = z.infer<typeof editKegiatanSchema>;

export const updateStatusKegiatanSchema = z.object({
  kegiatanId: z.string(),
  status: kegiatanStatusEnum,
  alasanDitolak: z.string().optional(), // Tambahkan ini untuk alasan penolakan
});

export type TUpdateStatusKegiatan = z.infer<typeof updateStatusKegiatanSchema>;
