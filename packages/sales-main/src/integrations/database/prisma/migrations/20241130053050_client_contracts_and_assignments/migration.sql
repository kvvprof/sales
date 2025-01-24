/*
  Warnings:

  - You are about to drop the column `is_deleted` on the `client_contracts` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[dkp_client_contract_properties_id]` on the table `client_contracts` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `client_contracts` DROP COLUMN `is_deleted`,
    ADD COLUMN `dkp_client_contract_properties_id` INTEGER NULL,
    ADD COLUMN `uu_contract_id` INTEGER NULL;

-- CreateTable
CREATE TABLE `dkp_client_contract_properties` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dkp_link` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `assignments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `client_contract_id` INTEGER NOT NULL,
    `client_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `client_contracts_dkp_client_contract_properties_id_key` ON `client_contracts`(`dkp_client_contract_properties_id`);

-- AddForeignKey
ALTER TABLE `client_contracts` ADD CONSTRAINT `client_contracts_dkp_client_contract_properties_id_fkey` FOREIGN KEY (`dkp_client_contract_properties_id`) REFERENCES `dkp_client_contract_properties`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `assignments` ADD CONSTRAINT `assignments_client_contract_id_fkey` FOREIGN KEY (`client_contract_id`) REFERENCES `client_contracts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `assignments` ADD CONSTRAINT `assignments_client_id_fkey` FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
