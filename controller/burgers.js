const pool = require('../db').pool
const getburgersfromrest = (req,res)=>
{
    pool.query("select * from burgers where id IN (select burgers_id from restaurant_burgers where restaurant_id IN (select id from restaurant where name= $1 and address= $2));",[req.params.rest, req.params.loc] ,(error,result)=>
    {
        if(error) 
        {
            
            res.status(404).send();
        }
        else
        {
            
            res.status(200).json(result.rows);
            
        }

    })
  

}
module.exports={
    getburgersfromrest
}