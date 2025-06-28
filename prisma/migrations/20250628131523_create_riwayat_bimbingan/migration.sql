-- CreateTable
CREATE TABLE `RiwayatPerubahanPembimbing` (
    `id` VARCHAR(191) NOT NULL,
    `mahasiswaId` VARCHAR(191) NOT NULL,
    `alasan` VARCHAR(191) NOT NULL,
    `pembimbingIdLama` VARCHAR(191) NULL,
    `promotorIdLama` VARCHAR(191) NULL,
    `koPromotorIdLama` VARCHAR(191) NULL,
    `pembimbingIdBaru` VARCHAR(191) NULL,
    `promotorIdBaru` VARCHAR(191) NULL,
    `koPromotorIdBaru` VARCHAR(191) NULL,
    `changedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RiwayatPerubahanPembimbing` ADD CONSTRAINT `RiwayatPerubahanPembimbing_mahasiswaId_fkey` FOREIGN KEY (`mahasiswaId`) REFERENCES `Mahasiswa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
