/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[Email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Funcao` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "email",
DROP COLUMN "id",
DROP COLUMN "name",
DROP COLUMN "role",
ADD COLUMN     "Email" TEXT NOT NULL,
ADD COLUMN     "Funcao" TEXT NOT NULL,
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD COLUMN     "Nome" TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("Id");

-- CreateTable
CREATE TABLE "UsuarioInformacao" (
    "Id" SERIAL NOT NULL,
    "UserId" INTEGER NOT NULL,

    CONSTRAINT "UsuarioInformacao_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UsuarioInformacao_UserId_key" ON "UsuarioInformacao"("UserId");

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");

-- AddForeignKey
ALTER TABLE "UsuarioInformacao" ADD CONSTRAINT "UsuarioInformacao_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
