exports.signup = (req,res) => {
    const{name,password} = req.body
    res.json({
        user:{name,password}
    })
}