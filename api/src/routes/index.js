const expres = require("express");
const router = expres.Router();

const { test, getUsers, createUser } = require("./services");

router.get("/test", test);
router.get("/users", getUsers);
router.post("/users", createUser);

module.exports = router;
