const expres = require("express");
const router = expres.Router();

const { test, logIn } = require("./services");

router.get("/test", test);
router.post("/logIn", logIn);

module.exports = router;
