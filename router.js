//exporta o express
const express = require("express")
//cria o roteador 
const router = express.Router("router")


//definindo rotas para o roteador
router.get("/", (req, res)=> {
    return res.sendFile(__dirname + "/views/index.html")
})
router.get("/views/second.html", (req, res)=> {
    return res.sendFile(__dirname + "/views/second.html")
})

router.get("/public/img/img.jpg", (req, res)=> {
    return res.sendFile(__dirname + "/public/img/img.jpg")
})

router.get("/views/blog.html", (req, res)=> {
    return res.sendFile(__dirname + "/views/blog.html")
})
router.get("/views/index.html", (req, res)=> {
    return res.sendFile(__dirname + "/views/index.html")
})
router.get("/views/sobre.html", (req, res)=> {
    return res.sendFile(__dirname + "/views/sobre.html")
})





//exportando roteador
module.exports = router
