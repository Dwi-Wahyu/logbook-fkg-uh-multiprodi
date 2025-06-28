-- CreateTable
CREATE TABLE `Pengguna` (
    `id` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `peran` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NULL,
    `programStudiId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Pengguna_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mahasiswa` (
    `id` VARCHAR(191) NOT NULL,
    `penggunaId` VARCHAR(191) NOT NULL,
    `semester` INTEGER NOT NULL,
    `pembimbingId` VARCHAR(191) NULL,
    `judulDisertasi` VARCHAR(191) NULL,
    `angkatan` VARCHAR(191) NULL,
    `tempatTanggalLahir` VARCHAR(191) NULL,
    `alamat` VARCHAR(191) NULL,
    `alamatKeluarga` VARCHAR(191) NULL,
    `tahunLulus` VARCHAR(191) NULL,
    `mulaiMasukPendidikan` DATETIME(3) NULL,
    `pekerjaan` VARCHAR(191) NULL,
    `nomorTelpon` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Mahasiswa_penggunaId_key`(`penggunaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dosen` (
    `id` VARCHAR(191) NOT NULL,
    `penggunaId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Dosen_penggunaId_key`(`penggunaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Logbook` (
    `id` VARCHAR(191) NOT NULL,
    `mahasiswaId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `penggunaId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Kegiatan` (
    `id` VARCHAR(191) NOT NULL,
    `logbookId` VARCHAR(191) NOT NULL,
    `fieldsData` JSON NULL,
    `status` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Lampiran` (
    `id` VARCHAR(191) NOT NULL,
    `kegiatanId` VARCHAR(191) NOT NULL,
    `namaFile` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PermohonanBimbingan` (
    `id` VARCHAR(191) NOT NULL,
    `mahasiswaId` VARCHAR(191) NOT NULL,
    `dosenId` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'PENDING',
    `pesan` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `penggunaId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notifikasi` (
    `id` VARCHAR(191) NOT NULL,
    `penggunaId` VARCHAR(191) NOT NULL,
    `judul` VARCHAR(191) NOT NULL,
    `pesan` VARCHAR(191) NOT NULL,
    `isRead` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProgramStudi` (
    `id` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `displayName` VARCHAR(191) NOT NULL,
    `templateSingleFieldForDate` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `ProgramStudi_nama_key`(`nama`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProgramStudiField` (
    `id` VARCHAR(191) NOT NULL,
    `programStudiId` VARCHAR(191) NOT NULL,
    `fieldName` VARCHAR(191) NOT NULL,
    `fieldType` VARCHAR(191) NOT NULL,
    `isRequired` BOOLEAN NOT NULL DEFAULT false,
    `order` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `ProgramStudiField_programStudiId_fieldName_key`(`programStudiId`, `fieldName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pengguna` ADD CONSTRAINT `Pengguna_programStudiId_fkey` FOREIGN KEY (`programStudiId`) REFERENCES `ProgramStudi`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mahasiswa` ADD CONSTRAINT `Mahasiswa_penggunaId_fkey` FOREIGN KEY (`penggunaId`) REFERENCES `Pengguna`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mahasiswa` ADD CONSTRAINT `Mahasiswa_pembimbingId_fkey` FOREIGN KEY (`pembimbingId`) REFERENCES `Dosen`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Dosen` ADD CONSTRAINT `Dosen_penggunaId_fkey` FOREIGN KEY (`penggunaId`) REFERENCES `Pengguna`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Logbook` ADD CONSTRAINT `Logbook_mahasiswaId_fkey` FOREIGN KEY (`mahasiswaId`) REFERENCES `Mahasiswa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Logbook` ADD CONSTRAINT `Logbook_penggunaId_fkey` FOREIGN KEY (`penggunaId`) REFERENCES `Pengguna`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Kegiatan` ADD CONSTRAINT `Kegiatan_logbookId_fkey` FOREIGN KEY (`logbookId`) REFERENCES `Logbook`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lampiran` ADD CONSTRAINT `Lampiran_kegiatanId_fkey` FOREIGN KEY (`kegiatanId`) REFERENCES `Kegiatan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PermohonanBimbingan` ADD CONSTRAINT `PermohonanBimbingan_mahasiswaId_fkey` FOREIGN KEY (`mahasiswaId`) REFERENCES `Mahasiswa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PermohonanBimbingan` ADD CONSTRAINT `PermohonanBimbingan_dosenId_fkey` FOREIGN KEY (`dosenId`) REFERENCES `Dosen`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PermohonanBimbingan` ADD CONSTRAINT `PermohonanBimbingan_penggunaId_fkey` FOREIGN KEY (`penggunaId`) REFERENCES `Pengguna`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notifikasi` ADD CONSTRAINT `Notifikasi_penggunaId_fkey` FOREIGN KEY (`penggunaId`) REFERENCES `Pengguna`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProgramStudiField` ADD CONSTRAINT `ProgramStudiField_programStudiId_fkey` FOREIGN KEY (`programStudiId`) REFERENCES `ProgramStudi`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
