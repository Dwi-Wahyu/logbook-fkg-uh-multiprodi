import DashboardCard from "@/components/dashboard-card";
import { Skeleton } from "@/components/ui/skeleton";
import { Prisma } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { NotebookText, Users, Users2, UserSearch } from "lucide-react";
import { Suspense } from "react";

export default async function DashboardInfo({
  id,
  peran,
}: {
  id: string;
  peran: string;
}) {
  const jumlahMahasiswa = await prisma.pengguna.count({
    where: {
      peran: "MAHASISWA",
    },
  });

  const jumlahDosen = await prisma.pengguna.count({
    where: {
      peran: "DOSEN",
    },
  });

  type pengajuanWhereType = Prisma.KegiatanWhereInput;

  let pengajuanWhereClause: pengajuanWhereType = {};

  if (peran === "DOSEN") {
    pengajuanWhereClause.logbook = {
      mahasiswa: {
        pembimbingId: id,
      },
    };
  } else if (peran === "MAHASISWA") {
    pengajuanWhereClause.logbook = {
      penggunaId: id,
    };
  } else {
    pengajuanWhereClause = {};
  }

  const jumlahPengajuan = await prisma.kegiatan.count({
    where: pengajuanWhereClause,
  });

  const jumlahPengajuanBelumDisetujui = await prisma.kegiatan.count({
    where: {
      ...pengajuanWhereClause,
      status: {
        not: "DISETUJUI",
      },
    },
  });

  const isAdmin = peran === "ADMIN" || peran === "SUPERADMIN";

  return (
    <Suspense fallback={<DashboardInfoSkeleton />}>
      <div className="mb-5 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <DashboardCard icon={Users} title="Mahasiswa" value={jumlahMahasiswa} />

        <DashboardCard icon={Users2} title="Dosen" value={jumlahDosen} />

        {!isAdmin && (
          <>
            <DashboardCard
              icon={NotebookText}
              title="Jumlah Pengajuan"
              value={jumlahPengajuan}
            />

            <DashboardCard
              icon={UserSearch}
              title="Jumlah Pengajuan Belum Disetujui"
              value={jumlahPengajuanBelumDisetujui}
            />
          </>
        )}
      </div>
    </Suspense>
  );
}

function DashboardInfoSkeleton() {
  return (
    <div className="mb-5 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      <Skeleton className="w-full h-20" />
      <Skeleton className="w-full h-20" />
      <Skeleton className="w-full h-20" />
      <Skeleton className="w-full h-20" />
    </div>
  );
}
