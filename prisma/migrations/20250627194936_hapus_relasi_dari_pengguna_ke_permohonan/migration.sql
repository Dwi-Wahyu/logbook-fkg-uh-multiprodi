/*
  Warnings:

  - You are about to drop the column `penggunaId` on the `permohonanbimbingan` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `permohonanbimbingan` DROP FOREIGN KEY `PermohonanBimbingan_penggunaId_fkey`;

-- DropIndex
DROP INDEX `PermohonanBimbingan_penggunaId_fkey` ON `permohonanbimbingan`;

-- AlterTable
ALTER TABLE `permohonanbimbingan` DROP COLUMN `penggunaId`;
