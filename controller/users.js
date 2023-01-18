const pool = require('../db').pool
const createusers = (req,res)=>{
    pool.query("INSERT INTO users (name, email, mobile_no) VALUES ($1, $2, $3)",[ req.body.user.name, req.body.user.email, req.body.user.mobile_no], (err, result)=>
    {
        if(err) throw err;
        else
        {
            user={
                "name":req.body.user.name,
                "email":req.body.user.email,
                "mobile_no":req.body.user.mobile_no
            }
            res.status(200).json(user);
        }
    })

};
const getuser = (req,res)=>{
    pool.query("select name, email, mobile_no from users where email = $1",[req.params.email], (err, result)=>
    {
        
        if(err) throw err.message;
        else
        {
            
            res.status(200).json(result.rows[0]);
        }
    })

}
module.exports={
    createusers, getuser
}
