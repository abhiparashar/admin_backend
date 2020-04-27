exports.signup = () => {
    const{name,password} = req.body
    res.json({
        user:{name,password}
    })
}