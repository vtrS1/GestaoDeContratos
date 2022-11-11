const express = require("express");
const contratosRoutes = require ("./routes")
const app = express();

app.use(express.json());
app.use(contratosRoutes);

app.get("/health", (req, res) => {
  return res.json("up")
});


app.listen(3333, () => console.log("Para acessar o servidor acesse o link aqui http://localhost:3333"));