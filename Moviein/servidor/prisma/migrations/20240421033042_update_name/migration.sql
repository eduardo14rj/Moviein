/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsuarioInformacao` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UsuarioInformacao" DROP CONSTRAINT "UsuarioInformacao_UserId_fkey";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "UsuarioInformacao";

-- CreateTable
CREATE TABLE "usuario" (
    "Id" SERIAL NOT NULL,
    "Email" TEXT NOT NULL,
    "Nome" TEXT,
    "Funcao" TEXT NOT NULL,
    "Senha" TEXT NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "usuarioInformacao" (
    "Id" SERIAL NOT NULL,
    "UsuarioId" INTEGER NOT NULL,
    "Cpf" TEXT NOT NULL,
    "DataNascimento" TIMESTAMP(3) NOT NULL,
    "NomeMaterno" TEXT NOT NULL,
    "Telefone" TEXT NOT NULL,
    "Genero" TEXT NOT NULL,
    "Cep" TEXT NOT NULL,
    "Pais" TEXT NOT NULL,
    "Estado" TEXT NOT NULL,
    "Bairro" TEXT NOT NULL,
    "Complemento" TEXT NOT NULL,
    "Cidade" TEXT NOT NULL,
    "Numero" TEXT NOT NULL,

    CONSTRAINT "usuarioInformacao_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_Email_key" ON "usuario"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "usuarioInformacao_UsuarioId_key" ON "usuarioInformacao"("UsuarioId");

-- AddForeignKey
ALTER TABLE "usuarioInformacao" ADD CONSTRAINT "usuarioInformacao_UsuarioId_fkey" FOREIGN KEY ("UsuarioId") REFERENCES "usuario"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
