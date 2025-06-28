// src/app/_lib/actions/bimbinganActions.ts
"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { validateServerActionPayload } from "@/lib/validateServerActionPayload"; // Asumsi Anda punya ini
import {
  TUpdatePembimbingSchema,
  updatePembimbingSchema,
} from "@/schema/BimbinganSchema";

// Zod Schema untuk update pembimbing

/**
 * Server Action to update the main supervisor (pembimbing) for a student.
 * This function also logs the change in a history table.
 * @param payload The data for updating the supervisor, including student ID and new supervisor ID.
 * @returns A success/error object indicating the result of the operation.
 */
export async function updatePembimbing(payload: TUpdatePembimbingSchema) {
  const { data, error } = await validateServerActionPayload(
    payload,
    updatePembimbingSchema
  );

  if (error) {
    return error;
  }
  if (!data) {
    return { success: false, message: "Data tidak valid." };
  }

  const { mahasiswaId, alasan, pembimbingId } = data;

  try {
    // 1. Dapatkan pembimbing lama (jika ada) untuk logging riwayat
    const currentMahasiswa = await prisma.mahasiswa.findUnique({
      where: { id: mahasiswaId },
      select: {
        pembimbingId: true,
      },
    });

    const pembimbingIdLama = currentMahasiswa?.pembimbingId;

    // 2. Perbarui data mahasiswa dengan pembimbing baru
    const updatedMahasiswa = await prisma.mahasiswa.update({
      where: { id: mahasiswaId },
      data: {
        pembimbingId: pembimbingId === "" ? null : pembimbingId, // Konversi string kosong dari Select menjadi null
      },
    });

    // 3. Buat log perubahan di tabel riwayat (asumsi model RiwayatPerubahanPembimbing ada)
    await prisma.riwayatPerubahanPembimbing.create({
      data: {
        mahasiswaId: mahasiswaId,
        alasan: alasan,
        pembimbingIdLama: pembimbingIdLama,
        pembimbingIdBaru: pembimbingId,
        // changedByUserId: "USER_ID_YANG_MELAKUKAN_PERUBAHAN", // Opsional: Tambahkan jika melacak pengguna yang mengubah
      },
    });

    // 4. Revalidate paths yang menampilkan informasi mahasiswa ini
    revalidatePath(`/admin/mahasiswa/${mahasiswaId}/edit-pembimbing`); // Halaman edit pembimbing
    revalidatePath(`/admin/mahasiswa/detail/${mahasiswaId}`); // Halaman detail mahasiswa

    return {
      success: true,
      message: "Pembimbing mahasiswa berhasil diperbarui.",
      data: updatedMahasiswa,
    };
  } catch (e) {
    console.error("Error updating pembimbing:", e);
    return {
      success: false,
      message: "Gagal memperbarui pembimbing mahasiswa.",
    };
  }
}
