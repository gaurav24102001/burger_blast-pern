const {Router} = require("express");
const router = Router();
const burger = require("../controller/burgers")
router.get("/:rest/:loc",burger.getburgersfromrest)

module.exports = router;