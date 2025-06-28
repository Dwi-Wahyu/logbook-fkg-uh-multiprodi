// src/app/admin/program-studi/[id]/_components/PenggunaProgramStudiOverview.tsx
"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // useRouter from next/navigation for App Router
import {
  User, // Icon for Mahasiswa
  UsersRound, // Icon for Dosen
  ShieldUser, // Icon for Admin/Superadmin
  Eye, // Icon for detail action
  Frown, // Icon for no users found
  Search, // Icon for search input
  Loader2, // Icon for loading spinner
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card"; // Import Card and CardContent
import { Button } from "@/components/ui/button"; // Import Button
import { Input } from "@/components/ui/input"; // Import Input
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Import Select components
import { toast } from "sonner"; // For toasts
import { CustomToast } from "@/components/toast"; // Custom toast component
import { useQueryState } from "nuqs"; // nuqs client-side hooks for URL state
import { parseAsString, parseAsInteger, parseAsStringEnum } from "nuqs"; // nuqs parsers

// Define roles for the filter dropdown (must match Prisma enum)
const roles = ["MAHASISWA", "DOSEN", "ADMIN", "SUPERADMIN"];

// Type definition for a single user item, inferred from the server query result
type PenggunaListResult = Awaited<
  ReturnType<
    typeof import("@/app/_lib/queries/penggunaQueries").getPenggunaByProgramStudi
  >
>;
type PenggunaItemType = PenggunaListResult["data"][number];

// Props for the Client Component
interface PenggunaProgramStudiOverviewProps {
  initialPenggunaList: PenggunaItemType[]; // Initial user data from Server Component
  programStudiDisplayName: string; // Display name of the Program Studi
  programStudiId: string; // ID of the Program Studi (for links/actions)
  currentSearchParams: Record<string, string | string[] | undefined>; // Raw search parameters from the server
}

export default function PenggunaProgramStudiOverview({
  initialPenggunaList,
  programStudiDisplayName,
  programStudiId,
  currentSearchParams,
}: PenggunaProgramStudiOverviewProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition(); // For showing loading state during navigation/re-fetch

  // nuqs hooks to manage search parameters in the URL (client-side)
  // Default values are handled by the nuqs parsers
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [perPage, setPerPage] = useQueryState(
    "perPage",
    parseAsInteger.withDefault(10)
  );
  const [nama, setNama] = useQueryState("nama", parseAsString.withDefault(""));
  const [username, setUsername] = useQueryState(
    "username",
    parseAsString.withDefault("")
  );
  const [angkatan, setAngkatan] = useQueryState(
    "angkatan",
    parseAsString.withDefault("")
  );
  const [peran, setPeran] = useQueryState(
    "peran",
    parseAsStringEnum(roles).withOptions({ clearOnDefault: true })
  );

  // Synchronize internal data state with the initial props when they change
  // (This happens when the Server Component re-fetches data and passes new props)
  useEffect(() => {
    // This effect runs when `initialPenggunaList` changes, meaning the server has provided new data
    setDataFromProps(initialPenggunaList);
  }, [initialPenggunaList]);

  // Use a separate state to hold the data that is rendered, allowing immediate UI updates while
  // the transition (router.refresh) is pending.
  const [dataFromProps, setDataFromProps] =
    useState<PenggunaItemType[]>(initialPenggunaList);

  // Group users by role for organized display
  const groupedUsers = useMemo(() => {
    const groups: {
      MAHASISWA: PenggunaItemType[];
      DOSEN: PenggunaItemType[];
      ADMIN: PenggunaItemType[];
      SUPERADMIN: PenggunaItemType[];
    } = {
      MAHASISWA: [],
      DOSEN: [],
      ADMIN: [],
      SUPERADMIN: [],
    };

    dataFromProps.forEach((user) => {
      // Use dataFromProps here
      if (Object.keys(groups).includes(user.peran)) {
        // Safely check if role exists in groups
        groups[user.peran as keyof typeof groups].push(user);
      }
    });
    return groups;
  }, [dataFromProps]); // Depend on dataFromProps

  // Helper function to get the appropriate icon based on the user's role
  const getRoleIcon = (peran: string) => {
    switch (peran) {
      case "MAHASISWA":
        return <UsersRound className="h-5 w-5 text-green-500" />;
      case "DOSEN":
        return <User className="h-5 w-5 text-blue-500" />;
      case "ADMIN":
        return <ShieldUser className="h-5 w-5 text-indigo-500" />;
      case "SUPERADMIN":
        return <ShieldUser className="h-5 w-5 text-red-500" />;
      default:
        return <User className="h-5 w-5 text-gray-500" />; // Fallback icon
    }
  };

  // Define the order of roles to display
  const rolesToDisplay = ["MAHASISWA", "DOSEN", "ADMIN"];

  // Effect to trigger a server-side re-fetch when any nuqs query state changes
  useEffect(() => {
    startTransition(() => {
      // `nuqs` automatically updates the URL when `setPage`, `setNama`, etc. are called.
      // We just need to tell Next.js to re-fetch the data for the current route.
      // `router.refresh()` re-renders the parent Server Component with the updated URL search params.
      router.refresh();
    });
  }, [page, perPage, nama, username, angkatan, peran, router]); // Dependencies on nuqs states

  // Handler for the "Apply Filter" button
  const handleApplyFilters = () => {
    setPage(1); // Reset page to 1 when filters are applied
    // The useEffect above will handle the `router.refresh()`
  };

  // Placeholder for the delete action (needs a server action)
  const handleDeletePengguna = async (penggunaId: string) => {
    // This should be replaced with a custom modal UI for confirmation
    const confirmed = window.confirm(
      "Apakah Anda yakin ingin menghapus pengguna ini?"
    );
    if (confirmed) {
      // Call a server action here to delete the user
      // Example: const result = await deletePengguna(penggunaId);
      toast.custom(() => (
        <CustomToast
          title="Hapus Pengguna"
          description={`Fungsi delete untuk pengguna ${penggunaId} akan diimplementasikan.`}
          variant="info"
        />
      ));
      router.refresh(); // Refresh to reflect changes on the server-rendered page
    }
  };

  return (
    <CardContent className="pt-6">
      {/* Filter Section */}
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-start gap-4 mb-8">
        <div className="relative w-full sm:w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Cari Nama..."
            value={nama ?? ""}
            onChange={(e) => setNama(e.target.value || null)}
            className="pl-9 w-full"
            disabled={isPending} // Disable input while loading
          />
        </div>
        <div className="relative w-full sm:w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Cari Username..."
            value={username ?? ""}
            onChange={(e) => setUsername(e.target.value || null)}
            className="pl-9 w-full"
            disabled={isPending}
          />
        </div>
        <Input
          placeholder="Angkatan (cth: 2020)"
          value={angkatan ?? ""}
          onChange={(e) => setAngkatan(e.target.value || null)}
          className="w-full sm:w-[150px]"
          disabled={isPending}
        />
        <Select
          value={peran ?? ""}
          onValueChange={(val) => setPeran(val === "" ? null : (val as any))}
          disabled={isPending}
        >
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter Peran" />
          </SelectTrigger>
          <SelectContent>
            {roles.map((role) => (
              <SelectItem key={role} value={role}>
                {role}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          onClick={handleApplyFilters}
          disabled={isPending}
          className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
        >
          {isPending ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Search className="mr-2 h-4 w-4" />
          )}
          Terapkan Filter
        </Button>
      </div>

      {/* Loading or No Users Found State */}
      {isPending ? (
        <div className="flex justify-center items-center h-40">
          <Loader2 className="animate-spin h-8 w-8 text-primary" />
          <span className="ml-2 text-gray-500">Memuat data pengguna...</span>
        </div>
      ) : initialPenggunaList.length === 0 ? ( // Display message if no users found after filtering
        <div className="text-center p-8 text-gray-500 rounded-lg bg-gray-50 border border-gray-200">
          <Frown className="h-10 w-10 mx-auto mb-4 text-gray-400" />
          <p className="text-lg font-medium">
            Tidak ada pengguna yang ditemukan dengan filter ini di{" "}
            <span className="font-semibold">{programStudiDisplayName}</span>.
          </p>
          <p className="text-sm">Coba sesuaikan filter Anda.</p>
        </div>
      ) : (
        // Display Users Grouped by Role
        <div className="space-y-8">
          {rolesToDisplay.map((role) => {
            const usersInRole = groupedUsers[role as keyof typeof groupedUsers];
            if (usersInRole.length === 0) {
              return null; // Don't display section if no users for this role
            }
            return (
              <div
                key={role}
                className="rounded-lg border border-gray-200 shadow-sm p-4 bg-white"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                  {getRoleIcon(role)}
                  <span>
                    {role} ({usersInRole.length})
                  </span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {usersInRole.map((pengguna) => (
                    <div
                      key={pengguna.id}
                      className="border border-gray-100 rounded-lg p-4 bg-white flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        {getRoleIcon(pengguna.peran)}{" "}
                        {/* Use specific user's role icon */}
                        <div>
                          <p className="font-semibold text-lg text-gray-900">
                            {pengguna.nama}
                          </p>
                          <p className="text-sm text-gray-600">
                            @{pengguna.username}
                          </p>
                        </div>
                      </div>
                      <div className="mt-auto">
                        <Link href={`/admin/pengguna/detail/${pengguna.id}`}>
                          <Button
                            variant="outline"
                            className="w-full text-primary border-primary hover:bg-primary/10 transition-colors"
                          >
                            <Eye className="h-4 w-4 mr-2" /> Lihat Detail
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </CardContent>
  );
}
