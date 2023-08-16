const path = require('path')
const express = require('express')
const app = express()
const port = 3000


function logger(req, res, next) {
    console.log(`Request received`)
    next()
}
app.use(logger);
app.use(express.static('assets'));

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'login.html'))
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'assets/js/panel-de-usuario.js'))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


/*
npx nodemon app.js
Con mati practicamos esto
    let email = req.query.email;
    let password = req.query.password;
    res.sendFile(path.join(__dirname, '/login.html'))
    //res.send('Hello World!')
    if (email === "a@a.com" && password === "1"){
        //email y contrasenia validas
        res.send({"estado" : "exito"});
    } else{
        res.send({"estado" : "invalido"});
    }
    */