const {Router} = require("express");
const router = Router();
const order = require("../controller/orders")
router.post("/",order.addorders);
router.get("/:user",order.getorders);

module.exports = router;