/*
  Warnings:

  - Added the required column `mataKuliahId` to the `Kegiatan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `kegiatan` ADD COLUMN `mataKuliahId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `MataKuliah` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(191) NOT NULL,
    `semester` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `MataKuliah_judul_key`(`judul`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Kegiatan` ADD CONSTRAINT `Kegiatan_mataKuliahId_fkey` FOREIGN KEY (`mataKuliahId`) REFERENCES `MataKuliah`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
