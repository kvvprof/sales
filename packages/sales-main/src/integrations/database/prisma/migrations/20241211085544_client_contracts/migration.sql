/*
  Warnings:

  - You are about to drop the column `printout_link` on the `client_contracts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `client_contracts` DROP COLUMN `printout_link`,
    ADD COLUMN `link` VARCHAR(191) NULL;
