import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PembimbingHero from "../PembimbingHero";
import { getDetailPengguna } from "@/app/_lib/queries/penggunaQueries";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  dataPengguna: Awaited<ReturnType<typeof getDetailPengguna>>;
};

export default async function PembimbingCard({ dataPengguna }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pembimbing Mahasiswa</CardTitle>
      </CardHeader>

      <CardContent>
        <PembimbingHero
          avatar={dataPengguna?.mahasiswa?.pembimbing?.pengguna.avatar ?? ""}
          nama={dataPengguna?.mahasiswa?.pembimbing?.pengguna.nama ?? ""}
          username={
            dataPengguna?.mahasiswa?.pembimbing?.pengguna.username ?? ""
          }
          programStudi={
            dataPengguna?.mahasiswa?.pembimbing?.pengguna.programStudi
              .displayName ?? ""
          }
        />
        <div className="flex justify-end pt-5">
          <Button asChild>
            <Link
              href={`/admin/pengguna/mahasiswa/ganti-pembimbing-mahasiswa/${dataPengguna?.id}`}
            >
              Ubah Pembimbing Mahasiswa
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
