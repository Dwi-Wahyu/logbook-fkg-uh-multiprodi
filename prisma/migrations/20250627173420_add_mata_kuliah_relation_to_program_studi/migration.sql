-- AlterTable
ALTER TABLE `matakuliah` ADD COLUMN `programStudiId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `MataKuliah` ADD CONSTRAINT `MataKuliah_programStudiId_fkey` FOREIGN KEY (`programStudiId`) REFERENCES `ProgramStudi`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
