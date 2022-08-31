exports.health = (req, res)=>{
    res.send({status: "ok", message: "I am healthy"});
}