
let blogs = [

]

let successFullMessage;

// universal array for blogs
let getHome = (req, res) => {
    res.status(200).render("home")
}

let getCompose = (req, res) => {

    res.status(200).render("compose_blog")
}

let postCompose = (req, res) => {
    console.log(req.body);
    successFullMessage = `your blog ${req.body.blog_title}, has been posted successfully !`
    res.status(201).render("compose_blog", { resSuccessFullMessage: successFullMessage })
}


export { getHome, getCompose, postCompose } 