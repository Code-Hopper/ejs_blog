export let justRun = (req,res,next) =>{

    if(req.params.name == "amey"){
        // next()
    }else{
        res.status(401).json({"message":"you dont have access for this content"})
    }
}