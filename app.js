/*const express = require('express')
const app = express()
const port = 3000
<<<<<<< HEAD
function logger() {
    console.log('Request received')
    next()
}
app.use(express.json());

app.get('/login', (req, res) => {
    /*
=======
const dirbase = "/assets"
app.use('/assets', express.static(path.join(__dirname, '/assets')))

app.get('/', (req, res) => {
>>>>>>> fb64c10db0e00b1f20c3fea0a8835b75e17281d5
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
})
<<<<<<< HEAD
=======
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

>>>>>>> fb64c10db0e00b1f20c3fea0a8835b75e17281d5
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})