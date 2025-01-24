/*
  Warnings:

  - You are about to drop the column `email` on the `agency_contract_signatories` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `agency_contract_signatories` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `agency_contract_signatories` DROP COLUMN `email`,
    DROP COLUMN `phone`,
    MODIFY `title` VARCHAR(191) NULL,
    MODIFY `based_on` VARCHAR(191) NULL;
