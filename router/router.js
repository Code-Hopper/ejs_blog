import express from "express"

import { getHome , getCompose } from "../controllers/controller.js"

let router = express()

router.get("/", getHome)

router.get("/compose-blog",getCompose)


export { router }