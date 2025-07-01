/*
  Warnings:

  - A unique constraint covering the columns `[ketuaProgramStudiId]` on the table `ProgramStudi` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `programstudi` ADD COLUMN `ketuaProgramStudiId` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Catatan` (
    `id` VARCHAR(191) NOT NULL,
    `kegiatanId` VARCHAR(191) NOT NULL,
    `penggunaId` VARCHAR(191) NOT NULL,
    `konten` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `ProgramStudi_ketuaProgramStudiId_key` ON `ProgramStudi`(`ketuaProgramStudiId`);

-- AddForeignKey
ALTER TABLE `Catatan` ADD CONSTRAINT `Catatan_kegiatanId_fkey` FOREIGN KEY (`kegiatanId`) REFERENCES `Kegiatan`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Catatan` ADD CONSTRAINT `Catatan_penggunaId_fkey` FOREIGN KEY (`penggunaId`) REFERENCES `Pengguna`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProgramStudi` ADD CONSTRAINT `ProgramStudi_ketuaProgramStudiId_fkey` FOREIGN KEY (`ketuaProgramStudiId`) REFERENCES `Pengguna`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
