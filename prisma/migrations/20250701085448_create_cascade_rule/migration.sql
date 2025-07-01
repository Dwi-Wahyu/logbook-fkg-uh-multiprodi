-- DropForeignKey
ALTER TABLE `kegiatan` DROP FOREIGN KEY `Kegiatan_logbookId_fkey`;

-- DropForeignKey
ALTER TABLE `logbook` DROP FOREIGN KEY `Logbook_mahasiswaId_fkey`;

-- DropForeignKey
ALTER TABLE `logbook` DROP FOREIGN KEY `Logbook_penggunaId_fkey`;

-- DropIndex
DROP INDEX `Kegiatan_logbookId_fkey` ON `kegiatan`;

-- DropIndex
DROP INDEX `Logbook_mahasiswaId_fkey` ON `logbook`;

-- DropIndex
DROP INDEX `Logbook_penggunaId_fkey` ON `logbook`;

-- AlterTable
ALTER TABLE `jeniskegiatanfield` ADD COLUMN `showInTable` BOOLEAN NOT NULL DEFAULT true;

-- AddForeignKey
ALTER TABLE `Logbook` ADD CONSTRAINT `Logbook_mahasiswaId_fkey` FOREIGN KEY (`mahasiswaId`) REFERENCES `Mahasiswa`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Logbook` ADD CONSTRAINT `Logbook_penggunaId_fkey` FOREIGN KEY (`penggunaId`) REFERENCES `Pengguna`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Kegiatan` ADD CONSTRAINT `Kegiatan_logbookId_fkey` FOREIGN KEY (`logbookId`) REFERENCES `Logbook`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
