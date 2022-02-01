// NPM PRIJUNGIMAS

const express = require("express");
const cors = require("cors");
const { send } = require("process");
const app = express();
var casual = require('casual')

// MIDDLEWARE PALEIDIMAS

app.use(cors())

// DUOMENYS MYGTUKAMS

app.get('/', (req, res)=>{res.json("<h1>Sveiki iš back end'o</ h1>")})

app.get('/posts', (req, res)=>{res.json([{Title: 'pavadinimas1', Text: 'tekstas tekstas tekstastekstas tekstas tekstas tekstas'},{Title: 'paavadinimas2', Text: 'text text text text text'},{Title: 'pavadinimas3', Text: 'zodziai zodziai zodziai zodziai zodziai zodziai zodziai zodziai'}]
    
)})

app.get('/api/towns', (req, res) => {res.json(casual.city)})

// SERVERIO PALEIDIMAS

app.listen(3000, ()=>{console.log('serveris paleistas')});