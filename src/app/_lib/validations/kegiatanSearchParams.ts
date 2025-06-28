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
});

export type TKegiatanSearchParams = {
  page: number;
  perPage: number;
  judul: string;
  // **MODIFIED:** Allow 'null' in addition to 'undefined' for status
  status: "DIAJUKAN" | "DISETUJUI" | "DITOLAK" | undefined | null;
  mataKuliahId: string;
};
