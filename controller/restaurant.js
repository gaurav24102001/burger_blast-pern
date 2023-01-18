const pool = require('../db').pool
const getrestaurant = (req,res)=>{
    pool.query("SELECT * FROM restaurant", (err, result)=>
    {
        if(err) throw err;
        else
        {
            res.status(200).json(result.rows);
        }
    })

}
const getburgers=(req,res)=>
{
    pool.query("Select * from burgers where id in (select burgers_id from restaurant_burgers where restaurant_id=(SELECT id from restaurant where url = $1))",[req.params.resturl], (err, result)=>
    {
    if(err) throw err;
        else
        {
            res.status(200).json(result.rows);
        }
    })
}
module.exports={
    getrestaurant,
    getburgers
}