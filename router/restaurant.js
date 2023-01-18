const {Router} = require("express");
const rest = require("../controller/restaurant")
const router = Router();
router.get("/", rest.getrestaurant)
router.get("/:resturl/burgers", rest.getburgers);

module.exports = router;