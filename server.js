import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"

import { router } from "./router/router.js"

dotenv.config({ path: "./config.env" })

let app = express()

let port = process.env.PORT || 3056

app.use(express.json())

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("./public"))

app.set("view engine", "ejs")

app.use(router)

app.listen(port, () => {
    console.log(`Server is running on port :${port}`)
})