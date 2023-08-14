/*const express = require('express')
const app = express()
const port = 3000
const dirbase = "/assets"
app.use('/assets', express.static(path.join(__dirname, '/assets')))

app.get('/', (req, res) => {
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
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
*/
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})