const pool = require('../db').pool;
const addorders = (req, res) => {
  pool.query(
    'INSERT INTO orders (user_email, address, mobile_no) VALUES($1,$2,$3) RETURNING id',
    [req.body.user, req.body.address, req.body.mobile],
    (error, result) => {
      if (error) {
        res.status(404).send('bad request');
      } else {
        order_id = result.rows[0].id;
        req.body.cartitems.forEach((value) => {
          pool.query(
            'INSERT INTO burgers_order (orders_id, restaurant_id, burger_id, amount, quantity, burger_name) VALUES ($1, $2,$3,$4,$5,$6)',
            [
              order_id,
              value.restaurant,
              value.id,
              value.price,
              value.count,
              value.name,
            ],
            (error, result) => {
              if (error) {
                res.status(404).send('bad request');
              } else {
              }
            }
          );
        });
        res.status(200).send('done');
      }
    }
  );
};

const getorders = (req, res) => {
  let mans = {};
  let ans = [];
  const helper = async () => {
    try {
      const result1 = await pool.query(
        'Select * from orders where user_email= $1',
        [req.params.user]
      );

      c = 1;

      for (i of result1.rows) {
        ans.push(i);
        const result2 = await pool.query(
          'Select * from burgers_order where orders_id= $1',
          [i.id]
        );
        let temp = [];
        for (j of result2.rows) {
          temp.push(j);
        }
        mans[`order${c}`] = temp;
        c = c + 1;
      }
      mans['total'] = ans;
    } catch {}
    res.status(200).send(mans);
  };
  helper();
};

module.exports = {
  addorders,
  getorders,
};
