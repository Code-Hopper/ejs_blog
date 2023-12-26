let getHome = (req,res)=>{
    res.status(200).render("home")
}

let getCompose = (req,res)=>{
    res.status(200).render("compose_blog")
}

export {getHome ,getCompose} 