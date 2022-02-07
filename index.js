const express = require('express')
const app = express()
const daily = require('./daily.json')

app.get('/daily', (req,res) => {
    res.status(200).json(daily)
})

app.listen(8080, () => {
    console.log("Serveur à l'écoute")
})
