-- CreateTable
CREATE TABLE "deliveryman" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "titulo_original" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "data_lancamento" TEXT NOT NULL,
    "pontuacao" TEXT NOT NULL,

    CONSTRAINT "deliveryman_pkey" PRIMARY KEY ("id")
);
