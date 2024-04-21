/*
  Warnings:

  - Added the required column `Bairro` to the `UsuarioInformacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Cep` to the `UsuarioInformacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Cidade` to the `UsuarioInformacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Complemento` to the `UsuarioInformacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Cpf` to the `UsuarioInformacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `DataNascimento` to the `UsuarioInformacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Estado` to the `UsuarioInformacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Genero` to the `UsuarioInformacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `NomeMaterno` to the `UsuarioInformacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Numero` to the `UsuarioInformacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Pais` to the `UsuarioInformacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Telefone` to the `UsuarioInformacao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UsuarioInformacao" ADD COLUMN     "Bairro" TEXT NOT NULL,
ADD COLUMN     "Cep" TEXT NOT NULL,
ADD COLUMN     "Cidade" TEXT NOT NULL,
ADD COLUMN     "Complemento" TEXT NOT NULL,
ADD COLUMN     "Cpf" TEXT NOT NULL,
ADD COLUMN     "DataNascimento" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "Estado" TEXT NOT NULL,
ADD COLUMN     "Genero" TEXT NOT NULL,
ADD COLUMN     "NomeMaterno" TEXT NOT NULL,
ADD COLUMN     "Numero" TEXT NOT NULL,
ADD COLUMN     "Pais" TEXT NOT NULL,
ADD COLUMN     "Telefone" TEXT NOT NULL;
