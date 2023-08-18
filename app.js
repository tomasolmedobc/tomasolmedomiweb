/*const path = require('path')
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
app.post('/procesar', (req, res) => {
    const nombre = req.body.nombre;
    const email = req.body.email;
    // Aquí puedes procesar los datos como desees
    res.send(`¡Hola ${nombre}! Has enviado tu email (${email}) correctamente.`);
});

app.post('/login'),(req,res) => {
    let email = req.body.email;
    let password = req.body.password;
    console.log(email);
    console.log(password);
    if (email === 1@a.com && password === 1 ) {
        res.sendFile(path.join())
    }
}

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'assets/js/panel-de-usuario.js'))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

*/
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');
app.use(express.static('assets'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.post('/login', [
    body('email').isEmail().withMessage('El email no es válido'),
    body('password').notEmpty().withMessage('El password no es valido')
], (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    const email = req.body.email;
    const password = req.body.password;
    
    // Aquí puedes procesar los datos como desees
    res.send(`¡Usuario logueado con el email ${email} ! y su password es :${password} correctamente.`);
});


// app.post('/register', [
//     body('email').notEmpty().withMessage('No ha puesto ningun nombre'),
//     body('email').isEmail().withMessage('El email no es válido'),
//     body('password').notEmpty().withMessage('El nombre es requerido')
// ], (req, res) => {
//     const errors = validationResult(req);
    
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }
//     const username = req.body.username;
//     const email = req.body.email;
//     const password = req.body.password;
    
//     // Aquí puedes procesar los datos como desees
//     res.send(`¡Usuario creado con los datos siguientes, User: ${username}, email; ${email} ! y su password:${password}.`);
// });

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
