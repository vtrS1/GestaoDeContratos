const express = require("express");
const contratosRoutes = express.Router();
const {PrismaClient} = require("@prisma/client");
const { response, json } = require("express");


module.exports = contratosRoutes;
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
contratosRoutes.get("/Contratos", async (req, res) => {
  const todososcontratos = await prisma.Contratos.findMany(); 
  return res.status(201).json(todososcontratos);
})


//Edita Contratos
contratosRoutes.put("/EditarContratos", async (req, res) => {
  const {id, status,fornecedor,datacompra,datavencimento,quantidadedeparcelas, usuarioderegistro} = req.body

  
  if(!id){
    return res.status(400).json("Parametro Id Obrigatório");
  }
  
  const contratoexistente = await prisma.contratos.findUnique({where: { id }});
  
  if(!contratoexistente){
    return res.status(404).json("Contrato Inexistente");
  }

  const Contratos = await prisma.contratos.update({
    where: {
      id
 },
    data: {
      status,
      fornecedor,
      datacompra,
      datavencimento,
      quantidadedeparcelas, 
      usuarioderegistro
    }
});
  return res.status(200).json(Contratos)  
});

