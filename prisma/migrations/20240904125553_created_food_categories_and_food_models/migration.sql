/*
  Warnings:

  - You are about to drop the column `access_time` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `approved` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `before_price` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `catId` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `in_home_page` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `is_class` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `is_free` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `lessons` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `regular_price` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `requirements` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `what_you_will_learn` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `who_is_this_course_for` on the `Food` table. All the data in the column will be lost.
  - Added the required column `calories` to the `Food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `foodCatId` to the `Food` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Food_userId_catId_idx` ON `Food`;

-- AlterTable
ALTER TABLE `Food` DROP COLUMN `access_time`,
    DROP COLUMN `approved`,
    DROP COLUMN `before_price`,
    DROP COLUMN `catId`,
    DROP COLUMN `in_home_page`,
    DROP COLUMN `is_class`,
    DROP COLUMN `is_free`,
    DROP COLUMN `lessons`,
    DROP COLUMN `regular_price`,
    DROP COLUMN `requirements`,
    DROP COLUMN `what_you_will_learn`,
    DROP COLUMN `who_is_this_course_for`,
    ADD COLUMN `calories` INTEGER NOT NULL,
    ADD COLUMN `foodCatId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `FoodCategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `FoodCategory_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Food_userId_foodCatId_idx` ON `Food`(`userId`, `foodCatId`);
