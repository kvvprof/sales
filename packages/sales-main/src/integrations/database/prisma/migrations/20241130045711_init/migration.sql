-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `full_name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `is_manager` BOOLEAN NOT NULL DEFAULT true,
    `is_staff` BOOLEAN NOT NULL DEFAULT false,
    `user_role` ENUM('ADMINISTRATOR', 'DIRECTOR', 'SALES_EMPLOYEE') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `clients` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `full_name` VARCHAR(191) NOT NULL,
    `inn` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `client_category` ENUM('INDIVIDUAL', 'INDIVIDUAL_MINOR', 'ENTITY') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `client_individual_properties_id` INTEGER NULL,
    `client_individual_minor_properties_id` INTEGER NULL,
    `client_entity_properties_id` INTEGER NULL,

    UNIQUE INDEX `clients_client_individual_properties_id_key`(`client_individual_properties_id`),
    UNIQUE INDEX `clients_client_individual_minor_properties_id_key`(`client_individual_minor_properties_id`),
    UNIQUE INDEX `clients_client_entity_properties_id_key`(`client_entity_properties_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `client_individual_properties` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dob` DATE NULL,
    `snils` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `client_passport_id` INTEGER NULL,

    UNIQUE INDEX `client_individual_properties_client_passport_id_key`(`client_passport_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `client_individual_minor_properties` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dob` DATE NULL,
    `snils` VARCHAR(191) NULL,
    `birth_certificate` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `client_passport_id` INTEGER NULL,

    UNIQUE INDEX `client_individual_minor_properties_client_passport_id_key`(`client_passport_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `client_entity_properties` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kpp` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `r_clients_to_client_individual_minor_properties` (
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `client_id` INTEGER NOT NULL,
    `client_individual_minor_properties_id` INTEGER NOT NULL,

    PRIMARY KEY (`client_id`, `client_individual_minor_properties_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `client_passports` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `number` VARCHAR(191) NULL,
    `issued` VARCHAR(191) NULL,
    `code` VARCHAR(191) NULL,
    `place_of_birth` VARCHAR(191) NULL,
    `registration_address` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `client_contracts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `number` VARCHAR(191) NOT NULL,
    `date` DATE NOT NULL,
    `registration_date` DATE NULL,
    `price` DECIMAL(15, 2) NOT NULL,
    `client_contract_type` ENUM('DDU', 'DKP') NOT NULL,
    `is_real_estate_agency_act_disabled` BOOLEAN NULL DEFAULT false,
    `is_deleted` BOOLEAN NULL DEFAULT false,
    `comment` VARCHAR(191) NULL,
    `printout_link` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `ddu_client_contract_properties_id` INTEGER NULL,
    `product_id` INTEGER NOT NULL,
    `object_id` INTEGER NOT NULL,
    `real_estate_agent_id` INTEGER NULL,
    `manager_id` INTEGER NULL,
    `bank_id` INTEGER NULL,
    `subsidy_id` INTEGER NULL,

    UNIQUE INDEX `client_contracts_ddu_client_contract_properties_id_key`(`ddu_client_contract_properties_id`),
    UNIQUE INDEX `client_contracts_product_id_key`(`product_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ddu_client_contract_properties` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ddu_link` VARCHAR(191) NULL,
    `return_account` VARCHAR(191) NULL,
    `escrow_account_opening_date` DATE NULL,
    `escrow_period` DATE NULL,
    `escrow_account_number` VARCHAR(191) NULL,
    `is_escrow_discount` BOOLEAN NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `r_client_contracts_to_agency_contracts` (
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `client_contract_id` INTEGER NOT NULL,
    `agency_contract_id` INTEGER NOT NULL,

    PRIMARY KEY (`client_contract_id`, `agency_contract_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `r_client_contracts_to_clients` (
    `is_main` BOOLEAN NOT NULL,
    `share` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `client_contract_id` INTEGER NOT NULL,
    `client_id` INTEGER NOT NULL,

    PRIMARY KEY (`client_contract_id`, `client_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `scheduled_payments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `payment` DECIMAL(15, 2) NOT NULL,
    `date` DATE NOT NULL,
    `scheduled_payment_type` ENUM('OWN', 'MORTGAGE', 'EXCHANGE', 'MATERNITY_CAPITAL') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `client_contract_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `actual_payments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `payment` DECIMAL(15, 2) NOT NULL,
    `date` DATE NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `client_contract_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `objects` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `common_db_objects_id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `entity_id` INTEGER NOT NULL,

    UNIQUE INDEX `objects_common_db_objects_id_key`(`common_db_objects_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pricing_products_id` INTEGER NOT NULL,
    `number` VARCHAR(191) NOT NULL,
    `product_category` ENUM('FLAT', 'OFFICE', 'APARTMENT', 'STORAGE_ROOM', 'PARKING_SPACE') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `object_id` INTEGER NOT NULL,

    UNIQUE INDEX `products_pricing_products_id_key`(`pricing_products_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `agencies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `common_db_contractors_id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `inn` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `agencies_common_db_contractors_id_key`(`common_db_contractors_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `agency_contracts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `number` VARCHAR(191) NOT NULL,
    `date` DATE NOT NULL,
    `agency_contract_type` ENUM('REAL_ESTATE_AGENCY_CONTRACT', 'MIP_AGENCY_CONTRACT') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `responsible_user_id` INTEGER NULL,
    `entity_id` INTEGER NOT NULL,
    `object_id` INTEGER NOT NULL,
    `agency_id` INTEGER NOT NULL,
    `agency_contract_signatory_id` INTEGER NULL,
    `real_estate_agency_contract_properties_id` INTEGER NULL,
    `mip_agency_contract_properties_id` INTEGER NULL,

    UNIQUE INDEX `agency_contracts_real_estate_agency_contract_properties_id_key`(`real_estate_agency_contract_properties_id`),
    UNIQUE INDEX `agency_contracts_mip_agency_contract_properties_id_key`(`mip_agency_contract_properties_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `agency_contract_signatories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `full_name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `based_on` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `agency_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `real_estate_agency_contract_properties` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `agency_contract_commission_id` INTEGER NOT NULL,

    UNIQUE INDEX `real_estate_agency_contract_properties_agency_contract_commi_key`(`agency_contract_commission_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mip_agency_contract_properties` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `agency_contract_commission_id` INTEGER NOT NULL,

    UNIQUE INDEX `mip_agency_contract_properties_agency_contract_commission_id_key`(`agency_contract_commission_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `agency_contract_commissions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `percent` DECIMAL(15, 2) NOT NULL,
    `threshold` DECIMAL(15, 2) NOT NULL,
    `max_days` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `real_estate_agents` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `full_name` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `one_gt_id` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `real_estate_agents_one_gt_id_key`(`one_gt_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `r_agencies_to_real_estate_agents` (
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `agency_id` INTEGER NOT NULL,
    `real_estate_agent_id` INTEGER NOT NULL,

    PRIMARY KEY (`agency_id`, `real_estate_agent_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `entities` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `common_db_entities_id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `website` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `entities_common_db_entities_id_key`(`common_db_entities_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `entity_forbidden_websites` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `entity_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `entity_forbidden_brands` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `entity_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `banks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `is_visible` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `escrow_accounts_history` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` ENUM('OPENED', 'CLOSED') NOT NULL,
    `number` VARCHAR(191) NOT NULL,
    `opening_date` DATE NOT NULL,
    `deposited_amount` DECIMAL(15, 2) NOT NULL,
    `incoming_balance` DECIMAL(15, 2) NOT NULL,
    `date_of_transaction` DATE NOT NULL,
    `transaction_amount` DECIMAL(15, 2) NOT NULL,
    `outgoing_balance` DECIMAL(15, 2) NOT NULL,
    `expiration_date` DATE NOT NULL,
    `depositor` VARCHAR(191) NOT NULL,
    `depositor_inn` VARCHAR(191) NULL,
    `ddu_number` VARCHAR(191) NOT NULL,
    `ddu_date` DATE NOT NULL,
    `loan_agreement_number` VARCHAR(191) NULL,
    `loan_agreement_date` DATE NULL,
    `closing_date` DATE NULL,
    `builder_inn` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `real_estate_agency_acts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `number` VARCHAR(191) NOT NULL,
    `date` DATE NOT NULL,
    `amount` DECIMAL(15, 2) NOT NULL,
    `link` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `client_contract_id` INTEGER NOT NULL,
    `agency_id` INTEGER NOT NULL,
    `agency_contract_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subsidies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `is_visible` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `clients` ADD CONSTRAINT `clients_client_individual_properties_id_fkey` FOREIGN KEY (`client_individual_properties_id`) REFERENCES `client_individual_properties`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `clients` ADD CONSTRAINT `clients_client_individual_minor_properties_id_fkey` FOREIGN KEY (`client_individual_minor_properties_id`) REFERENCES `client_individual_minor_properties`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `clients` ADD CONSTRAINT `clients_client_entity_properties_id_fkey` FOREIGN KEY (`client_entity_properties_id`) REFERENCES `client_entity_properties`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `client_individual_properties` ADD CONSTRAINT `client_individual_properties_client_passport_id_fkey` FOREIGN KEY (`client_passport_id`) REFERENCES `client_passports`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `client_individual_minor_properties` ADD CONSTRAINT `client_individual_minor_properties_client_passport_id_fkey` FOREIGN KEY (`client_passport_id`) REFERENCES `client_passports`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `r_clients_to_client_individual_minor_properties` ADD CONSTRAINT `r_clients_to_client_individual_minor_properties_client_id_fkey` FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `r_clients_to_client_individual_minor_properties` ADD CONSTRAINT `r_clients_to_client_individual_minor_properties_client_indi_fkey` FOREIGN KEY (`client_individual_minor_properties_id`) REFERENCES `client_individual_minor_properties`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `client_contracts` ADD CONSTRAINT `client_contracts_ddu_client_contract_properties_id_fkey` FOREIGN KEY (`ddu_client_contract_properties_id`) REFERENCES `ddu_client_contract_properties`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `client_contracts` ADD CONSTRAINT `client_contracts_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `client_contracts` ADD CONSTRAINT `client_contracts_object_id_fkey` FOREIGN KEY (`object_id`) REFERENCES `objects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `client_contracts` ADD CONSTRAINT `client_contracts_real_estate_agent_id_fkey` FOREIGN KEY (`real_estate_agent_id`) REFERENCES `real_estate_agents`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `client_contracts` ADD CONSTRAINT `client_contracts_manager_id_fkey` FOREIGN KEY (`manager_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `client_contracts` ADD CONSTRAINT `client_contracts_bank_id_fkey` FOREIGN KEY (`bank_id`) REFERENCES `banks`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `client_contracts` ADD CONSTRAINT `client_contracts_subsidy_id_fkey` FOREIGN KEY (`subsidy_id`) REFERENCES `subsidies`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `r_client_contracts_to_agency_contracts` ADD CONSTRAINT `r_client_contracts_to_agency_contracts_client_contract_id_fkey` FOREIGN KEY (`client_contract_id`) REFERENCES `client_contracts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `r_client_contracts_to_agency_contracts` ADD CONSTRAINT `r_client_contracts_to_agency_contracts_agency_contract_id_fkey` FOREIGN KEY (`agency_contract_id`) REFERENCES `agency_contracts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `r_client_contracts_to_clients` ADD CONSTRAINT `r_client_contracts_to_clients_client_contract_id_fkey` FOREIGN KEY (`client_contract_id`) REFERENCES `client_contracts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `r_client_contracts_to_clients` ADD CONSTRAINT `r_client_contracts_to_clients_client_id_fkey` FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `scheduled_payments` ADD CONSTRAINT `scheduled_payments_client_contract_id_fkey` FOREIGN KEY (`client_contract_id`) REFERENCES `client_contracts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `actual_payments` ADD CONSTRAINT `actual_payments_client_contract_id_fkey` FOREIGN KEY (`client_contract_id`) REFERENCES `client_contracts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `objects` ADD CONSTRAINT `objects_entity_id_fkey` FOREIGN KEY (`entity_id`) REFERENCES `entities`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_object_id_fkey` FOREIGN KEY (`object_id`) REFERENCES `objects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agency_contracts` ADD CONSTRAINT `agency_contracts_responsible_user_id_fkey` FOREIGN KEY (`responsible_user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agency_contracts` ADD CONSTRAINT `agency_contracts_entity_id_fkey` FOREIGN KEY (`entity_id`) REFERENCES `entities`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agency_contracts` ADD CONSTRAINT `agency_contracts_object_id_fkey` FOREIGN KEY (`object_id`) REFERENCES `objects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agency_contracts` ADD CONSTRAINT `agency_contracts_agency_id_fkey` FOREIGN KEY (`agency_id`) REFERENCES `agencies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agency_contracts` ADD CONSTRAINT `agency_contracts_agency_contract_signatory_id_fkey` FOREIGN KEY (`agency_contract_signatory_id`) REFERENCES `agency_contract_signatories`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agency_contracts` ADD CONSTRAINT `agency_contracts_real_estate_agency_contract_properties_id_fkey` FOREIGN KEY (`real_estate_agency_contract_properties_id`) REFERENCES `real_estate_agency_contract_properties`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agency_contracts` ADD CONSTRAINT `agency_contracts_mip_agency_contract_properties_id_fkey` FOREIGN KEY (`mip_agency_contract_properties_id`) REFERENCES `mip_agency_contract_properties`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agency_contract_signatories` ADD CONSTRAINT `agency_contract_signatories_agency_id_fkey` FOREIGN KEY (`agency_id`) REFERENCES `agencies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `real_estate_agency_contract_properties` ADD CONSTRAINT `real_estate_agency_contract_properties_agency_contract_comm_fkey` FOREIGN KEY (`agency_contract_commission_id`) REFERENCES `agency_contract_commissions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mip_agency_contract_properties` ADD CONSTRAINT `mip_agency_contract_properties_agency_contract_commission_i_fkey` FOREIGN KEY (`agency_contract_commission_id`) REFERENCES `agency_contract_commissions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `r_agencies_to_real_estate_agents` ADD CONSTRAINT `r_agencies_to_real_estate_agents_agency_id_fkey` FOREIGN KEY (`agency_id`) REFERENCES `agencies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `r_agencies_to_real_estate_agents` ADD CONSTRAINT `r_agencies_to_real_estate_agents_real_estate_agent_id_fkey` FOREIGN KEY (`real_estate_agent_id`) REFERENCES `real_estate_agents`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `entity_forbidden_websites` ADD CONSTRAINT `entity_forbidden_websites_entity_id_fkey` FOREIGN KEY (`entity_id`) REFERENCES `entities`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `entity_forbidden_brands` ADD CONSTRAINT `entity_forbidden_brands_entity_id_fkey` FOREIGN KEY (`entity_id`) REFERENCES `entities`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `real_estate_agency_acts` ADD CONSTRAINT `real_estate_agency_acts_client_contract_id_fkey` FOREIGN KEY (`client_contract_id`) REFERENCES `client_contracts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `real_estate_agency_acts` ADD CONSTRAINT `real_estate_agency_acts_agency_id_fkey` FOREIGN KEY (`agency_id`) REFERENCES `agencies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `real_estate_agency_acts` ADD CONSTRAINT `real_estate_agency_acts_agency_contract_id_fkey` FOREIGN KEY (`agency_contract_id`) REFERENCES `agency_contracts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
