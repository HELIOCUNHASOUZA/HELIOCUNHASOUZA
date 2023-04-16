const express= require("express");
const app = express();
const port = 3000;
const router = require("./router")
const path = require("path")


app.use(express.static(path.join(__dirname, "public")))

//definindo router para gerenciar rotas 
app.use("/", router)


app.listen(port,()=>{
    console.log(`servidor rodando`)
})