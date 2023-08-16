const path = require('path')
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require ('body-parser')
app.use(bodyParser)

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

app.post('/login'),(req,res) => {
    let email = req.body.email;
    let password = req.body.password;
    console.log(email);
    console.log(password);
    if (email === 1@a && password === 1 ) {
        res.sendFile(path.join())
    }
}

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'assets/js/panel-de-usuario.js'))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})