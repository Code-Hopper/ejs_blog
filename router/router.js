import express from "express"

import { getHome , getCompose , postCompose , readBlog } from "../controllers/controller.js"

import { justRun } from "../middleware/justRun.js"

let router = express()

router.get("/:name",getHome)

router.get("/compose-blog",getCompose).post("/compose-blog",postCompose)

router.get("/readingblog/:name",readBlog)


export { router }