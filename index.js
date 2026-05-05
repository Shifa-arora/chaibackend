require('dotenv').config()

// console.log("Chai or Code")
const express = require('express')
// or
// import express from "express"

const app = express()  // abb app. kar ke bhot kuch use kar skte hai


const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send('shifa.com')
})
app.get('/login', (req, res) => {
    res.send("<h1>please login at shifa's first website to deploy</h1>")
})
app.get('/youtube', (req, res) => {
    res.send("<h2>Learing from ChaiAurCode</h2>")
})
app.get('/github', (req, res) => {
    res.json(github)
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})