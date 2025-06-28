/*
  Warnings:

  - Made the column `programStudiId` on table `pengguna` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `pengguna` DROP FOREIGN KEY `Pengguna_programStudiId_fkey`;

-- DropIndex
DROP INDEX `Pengguna_programStudiId_fkey` ON `pengguna`;

-- AlterTable
ALTER TABLE `pengguna` MODIFY `programStudiId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Pengguna` ADD CONSTRAINT `Pengguna_programStudiId_fkey` FOREIGN KEY (`programStudiId`) REFERENCES `ProgramStudi`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
