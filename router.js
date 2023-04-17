//exporta o express
const express = require("express")
//cria o roteador 
const router = express.Router("router")

//definindo rotas para o roteador
router.get("/", (req, res)=> {
    return res.sendFile(__dirname + "/views/index.html")
})

//exportando roteador
module.exports = router
