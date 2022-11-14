const express = require("express");
const usuariosRoutes = express.Router();
const {PrismaClient} = require("@prisma/client");
const { response } = require("express");

const prisma = new PrismaClient();
module.exports = usuariosRoutes;

//Cria Usuarios
usuariosRoutes.post("/CriarUsuarios", async (req, res) =>{
  
  const {Nome, Email, Cpf, datadoultimoacesso} = req.body;
  const Usuarios = await prisma.usuarios.create({
    data:
    {
      Nome, 
      Email, 
      Cpf, 
      datadoultimoacesso
    } 
    });
  return res.status(201).json(Usuarios);

})

//Ler Usuários
usuariosRoutes.get("/Usuarios", async (req, res) => {
  const usuarios = await prisma.usuarios.findMany(); 
  return res.status(201).json(usuarios);
})

//Editar Usuarios
usuariosRoutes.put("/EditarUsuarios", async (req, res) => {
  const {id, Nome, Email, Cpf, datadoultimoacesso} = req.body

  if(!id){
    return res.status(400).json("Parametro Id Obrigatório");
  }

  const usuarioexistente = await prisma.usuarios.findUnique({where: { id }});
  
  if(!usuarioexistente){
    return res.status(404).json("Usuário Inexistente");
  }

  const usuarios = await prisma.usuarios.update({
    where: {
      id
 },

    data: {
      Nome, 
      Email, 
      Cpf, 
      datadoultimoacesso
    }
});
  return res.status(200).json(usuarios)  
});

//Deleta Users

usuariosRoutes.delete("/Usuarios/:id", async (req, res) => {

  const { id } = req.params;
  const intId = parseInt(id);

  if(!intId){
    return res.status(400).json("Parametro Id Obrigatório");
  }

  const usuarioexistente = await prisma.usuarios.findUnique({where: { id: intId }});
  
  if(!usuarioexistente){
    return res.status(404).json("Usuário Inexistente");
  }

  await prisma.usuarios.delete({ where: { id: intId } });
  return res.status(200).json("Deletado com Sucesso")


})
