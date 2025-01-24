-- AlterTable
ALTER TABLE `client_contracts` ADD COLUMN `is_transfer_act_disabled` BOOLEAN NULL DEFAULT false;

-- CreateTable
CREATE TABLE `transfer_acts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `number` VARCHAR(191) NOT NULL,
    `date` DATE NOT NULL,
    `link` VARCHAR(191) NULL,
    `client_contract_id` INTEGER NOT NULL,
    `object_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `transfer_acts_client_contract_id_key`(`client_contract_id`),
    UNIQUE INDEX `transfer_acts_product_id_key`(`product_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `representatives` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `full_name` VARCHAR(191) NOT NULL,
    `attorney_number` VARCHAR(191) NULL,
    `attorney_date` DATE NULL,
    `authorized_by` VARCHAR(191) NULL,
    `authorized_role` VARCHAR(191) NULL,
    `client_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `r_transfer_acts_to_representatives` (
    `transfer_act_id` INTEGER NOT NULL,
    `representative_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`transfer_act_id`, `representative_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `transfer_acts` ADD CONSTRAINT `transfer_acts_client_contract_id_fkey` FOREIGN KEY (`client_contract_id`) REFERENCES `client_contracts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transfer_acts` ADD CONSTRAINT `transfer_acts_object_id_fkey` FOREIGN KEY (`object_id`) REFERENCES `objects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transfer_acts` ADD CONSTRAINT `transfer_acts_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `representatives` ADD CONSTRAINT `representatives_client_id_fkey` FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `r_transfer_acts_to_representatives` ADD CONSTRAINT `r_transfer_acts_to_representatives_transfer_act_id_fkey` FOREIGN KEY (`transfer_act_id`) REFERENCES `transfer_acts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `r_transfer_acts_to_representatives` ADD CONSTRAINT `r_transfer_acts_to_representatives_representative_id_fkey` FOREIGN KEY (`representative_id`) REFERENCES `representatives`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
