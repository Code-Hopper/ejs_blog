import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { router } from "./router/router.js"

dotenv.config({ path: "./config.env" })

let app = express()

let port = process.env.PORT || 3056

app.use(express.json())

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static(__dirname + '/public'));

app.set("view engine", "ejs")

app.use(router)

app.listen(port, () => {
    console.log(`Server is running on port :${port}`)
})