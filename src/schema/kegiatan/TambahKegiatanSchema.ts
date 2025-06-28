// src/schema/kegiatan/TambahKegiatanSchema.ts
import { z } from "zod";

export const kegiatanStatusEnum = z.enum(["DIAJUKAN", "DISETUJUI", "DITOLAK"], {
  required_error: "Status kegiatan wajib diisi.",
});

export const lampiranImageExtensions = ["png", "jpeg", "jpg"];
export const validLampiranExtensions = [
  "png",
  "jpeg",
  "jpg",
  "pdf",
  "doc",
  "docx",
];

export const tambahKegiatanSchema = z.object({
  mata_kuliahId: z.string().min(1, { message: "Mata kuliah wajib dipilih." }),
  pengajuId: z.string().min(1, { message: "ID pengaju tidak valid." }),
  lampiran: z
    .array(z.instanceof(File))
    .max(3, { message: "Maksimal 3 lampiran." })
    .optional(),
  status: kegiatanStatusEnum.default("DIAJUKAN").optional(),
  fieldsData: z.record(z.string(), z.any()),
});

export type TTambahKegiatan = z.infer<typeof tambahKegiatanSchema>;
