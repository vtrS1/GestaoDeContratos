const express = require("express");
const contratosRoutes = express.Router();
const {PrismaClient} = require("@prisma/client")

const prisma = new PrismaClient();


//Cria Contratos
contratosRoutes.post("/CriarContratos", async (req, res) =>{
    const {status,fornecedor,datacompra,datavencimento,quantidadedeparcelas, usuarioderegistro } = req.body;
    const contratos = await prisma.Contratos.create({
      data:
      {status,
       fornecedor,
       datacompra,
       datavencimento,
       quantidadedeparcelas, 
       usuarioderegistro} 
      });
    return res.status(201).json(contratos);

})

//Ler Contratos
contratosRoutes.get("/TodosContratos", async (req, res) => {
  const todososcontratos = await prisma.Contratos.findMany(); 
  return res.status(201).json(todososcontratos);
})

//Deleta Contratos
contratosRoutes.post("/DeletarContratos", (req, res) => {
  const {name} = req.body;
  allContratos.reduce({name});
  return res.status(201).json("Deletado Com Sucesso");
})



module.exports = contratosRoutes;