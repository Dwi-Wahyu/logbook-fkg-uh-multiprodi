// src/app/admin/program-studi/page.tsx
import { Suspense } from "react";
import Link from "next/link";
import {
  PlusCircle,
  Loader2,
  Eye,
  Edit,
  Trash2,
  LayoutGrid,
} from "lucide-react"; // Import new icons

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge"; // Assuming you have a Badge component (shadcn/ui or similar)

import { getAllProgramStudi } from "@/app/_lib/queries/programStudiQueries";
import { auth } from "@/config/auth";
import { redirect } from "next/navigation";

// A simple skeleton for loading state
const ProgramStudiTableSkeleton = () => (
  <div className="flex justify-center items-center h-40">
    <Loader2 className="animate-spin h-8 w-8 text-primary" />
    <span className="ml-2 text-gray-500">Memuat daftar program studi...</span>
  </div>
);

export default async function DaftarProgramStudi() {
  // Ensure user is authenticated and authorized (e.g., ADMIN or SUPERADMIN)
  const session = await auth();

  if (!session || !session.user || !session.user.id) {
    redirect("/auth/login"); // Redirect if no session
  }

  // Check user role for authorization to view this page
  // Adjust roles as per your application's authorization logic
  if (session.user.peran !== "ADMIN" && session.user.peran !== "SUPERADMIN") {
    // Redirect to an unauthorized page or dashboard
    redirect("/dashboard"); // Or show an access denied message
  }

  // Fetch program studi data
  const programStudiList = await getAllProgramStudi();

  return (
    <div className="container mx-auto">
      <Card className="w-full shadow-lg rounded-xl">
        <CardHeader className="flex justify-between">
          <div>
            <CardTitle className="">Daftar Program Studi</CardTitle>
            <CardDescription className="mt-2">
              Kelola data program studi dan field kustomnya dengan mudah.
            </CardDescription>
          </div>
          {/* <Link href="/admin/program-studi/tambah">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md rounded-lg flex items-center px-6 py-3">
              <PlusCircle className="mr-2 h-5 w-5" /> Tambah Program Studi
            </Button>
          </Link> */}
        </CardHeader>
        <CardContent className="pt-0">
          <Suspense fallback={<ProgramStudiTableSkeleton />}>
            {programStudiList.length === 0 ? (
              <div className="text-center p-8 text-gray-500 text-lg">
                Tidak ada program studi yang ditemukan.
              </div>
            ) : (
              <div className="relative w-full overflow-auto rounded-lg border border-gray-200 shadow-sm">
                {/* Refined border and shadow */}
                <Table className="min-w-full bg-white">
                  <TableHeader>
                    <TableRow className="bg-gray-50 border-b border-gray-200">
                      {/* Light background for header */}
                      <TableHead className="w-[50px] font-bold text-gray-700">
                        No
                      </TableHead>
                      <TableHead className="font-bold text-gray-700">
                        Nama Program Studi
                      </TableHead>
                      <TableHead className="text-center font-bold text-gray-700">
                        Aksi
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {programStudiList.map((programStudi, index) => (
                      <TableRow
                        key={programStudi.id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <TableCell className="font-medium text-gray-800">
                          {index + 1}
                        </TableCell>
                        <TableCell className="text-gray-800">
                          {programStudi.nama}
                        </TableCell>

                        <TableCell className="text-center">
                          <div className="flex justify-center space-x-2">
                            {/* Buttons in a flex container */}
                            <Link
                              href={`/admin/program-studi/detail/${programStudi.id}`}
                            >
                              <Button
                                variant="outline"
                                size="icon"
                                className="p-2 rounded-md border-primary text-primary hover:bg-primary/10 transition-colors"
                              >
                                {/* Primary outline */}
                                <Eye className="h-4 w-4" />
                                <span className="sr-only">Lihat Detail</span>
                              </Button>
                            </Link>
                            {/* Uncomment and style Edit/Delete buttons as needed */}
                            {/* Example Edit Button */}
                            <Link
                              href={`/admin/program-studi/edit/${programStudi.id}`}
                            >
                              <Button
                                variant="outline"
                                size="icon"
                                className="p-2 rounded-md border-indigo-500 text-indigo-500 hover:bg-indigo-50 transition-colors"
                              >
                                {/* Accent color for edit */}
                                <Edit className="h-4 w-4" />
                                <span className="sr-only">
                                  Edit Program Studi
                                </span>
                              </Button>
                            </Link>
                            {/* Example Delete Button (consider a custom modal for confirmation instead of simple click) */}
                            <Button
                              variant="destructive"
                              size="icon"
                              className="p-2 rounded-md hover:bg-red-600 transition-colors"
                            >
                              {/* Destructive button */}
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">
                                Hapus Program Studi
                              </span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
}
