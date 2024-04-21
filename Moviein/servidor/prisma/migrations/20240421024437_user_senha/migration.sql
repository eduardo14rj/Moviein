/*
  Warnings:

  - Added the required column `Senha` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "Senha" TEXT NOT NULL;
