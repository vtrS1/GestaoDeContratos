-- CreateTable
CREATE TABLE "Contratos" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,
    "fornecedor" TEXT NOT NULL,
    "datacompra" TIMESTAMP(3) NOT NULL,
    "datavencimento" TIMESTAMP(3) NOT NULL,
    "quantidadedeparcelas" INTEGER NOT NULL,
    "usuarioderegistro" TEXT NOT NULL,

    CONSTRAINT "Contratos_pkey" PRIMARY KEY ("id")
);
