/*
  Warnings:

  - You are about to drop the `deliveryman` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "deliveryman";

-- CreateTable
CREATE TABLE "filmes" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "titulo_original" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "data_lancamento" TEXT NOT NULL,
    "pontuacao" TEXT NOT NULL,

    CONSTRAINT "filmes_pkey" PRIMARY KEY ("id")
);
