const express = require( 'express' );
const router = express.Router();

router.get("/", function (req, res) { //mostrar perfiles
    let db = req.app.locals.db
    db.collection("musica").find().toArray(function (err, datos) {
        if (err != undefined) {
            console.log(err)
            res.send({ mensaje: "error: db no cargada" })
        } else {
            // console.log(datos);
            console.log("productos mostrados")
            res.send(datos)
        }
    })
})

router.get("/:tipo", function (req, res) { //mostrar perfiles
    let db = req.app.locals.db
    let tipo=req.params.tipo
    console.log(tipo);
    db.collection("musica").find({Genero: tipo}).toArray(function (err, datos) {
        if (err != undefined) {
            console.log(err)
            res.send({ mensaje: "error: db no cargada" })
        } else {
            // console.log(datos);
            console.log("productos mostrados")
            res.send(datos)
        }
    })
})

module.exports = router;