/*
  Warnings:

  - A unique constraint covering the columns `[judul,semester]` on the table `MataKuliah` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `MataKuliah_judul_key` ON `matakuliah`;

-- AlterTable
ALTER TABLE `mahasiswa` MODIFY `semester` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `MataKuliah_judul_semester_key` ON `MataKuliah`(`judul`, `semester`);
