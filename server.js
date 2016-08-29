'use strict'

const path         = require('path')
const fs           = require('fs')
const http         = require("http")
const express      = require("express")
const bodyParser   = require('body-parser')
const cookieParser = require('cookie-parser')


const port = 8080

let app          = express()
let server       = http.createServer(app)

app.use(express["static"](path.join(__dirname, "public")))

app.enable("strict routing")

app.set("views", path.join(__dirname,  "views"))
app.set("view engine", "ejs")

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))

console.log("Setting up routes...")

server.listen(port, ()=> console.log("Express server listening on port " + port) )
