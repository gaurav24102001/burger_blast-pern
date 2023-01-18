const {Router} = require("express");
const { createusers , getuser} = require("../controller/users");
const router = Router();

router.post("/",createusers);
router.get("/:email",getuser);

module.exports = router;