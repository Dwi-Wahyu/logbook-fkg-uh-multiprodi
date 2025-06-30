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
  semester: parseAsInteger.withOptions({
    clearOnDefault: true,
  }),
  jenisKegiatanId: parseAsString.withDefault(""), // <-- TAMBAHKAN INI
});

export type TKegiatanSearchParams = {
  page: number;
  perPage: number;
  judul: string;
  status: "DIAJUKAN" | "DISETUJUI" | "DITOLAK" | undefined | null;
  mataKuliahId: string;
  semester: number | null;
  jenisKegiatanId: string; // <-- TAMBAHKAN INI
};
