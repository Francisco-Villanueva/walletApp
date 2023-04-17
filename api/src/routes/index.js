const expres = require("express");
const router = expres.Router();

const { test, getUsers, createUser } = require("./services");

router.get("/test", test);
router.get("/users", getUsers);
router.post("/users", createUser);

const {
  createSpent,
  getSpents,
  deleteSpent,
  getSpentsById,
} = require("./spentServices");

router.post("/spent", createSpent);
router.get("/spent", getSpents);
router.get("/spent/:id", getSpentsById);
router.delete("/spent/:id", deleteSpent);

module.exports = router;
