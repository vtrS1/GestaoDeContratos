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

-- CreateTable
CREATE TABLE "Usuarios" (
    "id" SERIAL NOT NULL,
    "Nome" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Cpf" TEXT NOT NULL,
    "datadoultimoacesso" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);
