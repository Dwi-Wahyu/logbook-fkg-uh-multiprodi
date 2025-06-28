// src/app/_lib/validations/kegiatanSearchParams.ts
import {
  createSearchParamsCache,
  parseAsString,
  parseAsInteger,
  parseAsStringEnum,
} from "nuqs/server";

export const kegiatanSearchParams = createSearchParamsCache({
  page: parseAsInteger.withDefault(1),
  perPage: parseAsInteger.withDefault(10),
  judul: parseAsString.withDefault(""),
  status: parseAsStringEnum(["DIAJUKAN", "DISETUJUI", "DITOLAK"]).withOptions({
    clearOnDefault: true,
  }),
  mataKuliahId: parseAsString.withDefault(""),
  // --- Perbaikan field semester di sini ---
  // `parseAsInteger` secara default mengembalikan `number | null`,
  // jadi `.optional()` tidak diperlukan. `withOptions` diterapkan langsung.
  semester: parseAsInteger.withOptions({
    clearOnDefault: true, // Akan menghapus dari URL jika default (null)
  }),
});

export type TKegiatanSearchParams = {
  page: number;
  perPage: number;
  judul: string;
  status: "DIAJUKAN" | "DISETUJUI" | "DITOLAK" | undefined | null;
  mataKuliahId: string;
  // --- Tambahkan tipe semester di sini ---
  semester: number | null; // `parseAsInteger` akan menghasilkan `number | null`
};
