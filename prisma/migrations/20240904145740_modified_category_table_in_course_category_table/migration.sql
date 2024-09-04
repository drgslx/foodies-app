/*
  Warnings:

  - You are about to drop the column `foodId` on the `Enrolment` table. All the data in the column will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX `Enrolment_courseId_userId_foodId_idx` ON `Enrolment`;

-- AlterTable
ALTER TABLE `Enrolment` DROP COLUMN `foodId`;

-- DropTable
DROP TABLE `Category`;

-- CreateTable
CREATE TABLE `CourseCategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `CourseCategory_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Enrolment_courseId_userId_idx` ON `Enrolment`(`courseId`, `userId`);
