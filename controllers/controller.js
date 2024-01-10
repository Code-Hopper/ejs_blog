
import { justRun } from "../middleware/justRun.js";

let blogs = [

]

let successFullMessage;

// universal array for blogs
let getHome = (req, res) => {

    justRun(req,res)

    res.status(200).render("home",{blogs})
}

let getCompose = (req, res) => {

    res.status(200).render("compose_blog")
}

let postCompose = (req, res) => {
    console.log(req.body);

    blogs.push(req.body)

    successFullMessage = `your blog ${req.body.blog_title}, has been posted successfully !`
    res.status(201).render("compose_blog", { resSuccessFullMessage: successFullMessage })
}

let readBlog = (req,res)=>{

    console.log(req.params.name)

    let ReadBlog = blogs.filter((blog)=>{
        if(blog.blog_title == req.params.name){
            return blog;
        }else{
            return "Blog Not Found !"
        }
    })

    console.log(ReadBlog)

    res.status(201).render("blog",{ReadBlog})
}


export { getHome, getCompose, postCompose ,readBlog } 