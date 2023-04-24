const expres = require("express");
const router = expres.Router();

const {
  test,
  getUsers,
  createUser,
  getUsersById,
  editUser,
} = require("./services");

router.get("/test", test);
router.get("/users", getUsers);
router.get("/users/:id", getUsersById);
router.put("/users/:id", editUser);
router.post("/users", createUser);

const {
  createSpent,
  getSpents,
  deleteSpent,
  getSpentsById,
  getSpentsByTypes,
} = require("./spentServices");

router.post("/spent", createSpent);
router.get("/spent", getSpents);
router.get("/spent/:id", getSpentsById);
router.delete("/spent/:id", deleteSpent);
router.get("/types", getSpentsByTypes);

const { getWallets, createWallet } = require("./walletServices");

router.get("/wallet", getWallets);
router.post("/wallet", createWallet);

module.exports = router;
