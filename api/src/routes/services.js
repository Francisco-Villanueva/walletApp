const { Wallet, User } = require("../db");
const axios = require("axios");

const test = (req, res) => {
  res.send("hola");
};
const getUsers = async (req, res) => {
  try {
    const allUsers = await User.findAll();

    res.status(200).send(allUsers);
  } catch (error) {
    console.log("ERROR:  ", error);
    res.status(400).send(error);
  }
};
const createUser = async (req, res) => {
  try {
    const { name, email, pw } = req.body;

    if (!email || !pw || !name) {
      return res.status(400).send("Data mistakes!");
    }

    const newUser = await User.create({
      name: name,
      email: email,
      pw: pw,
    });

    res.status(200).send(newUser);
  } catch (error) {
    console.log("ERROR:  ", error);
    res.status(400).send(error);
  }
};

module.exports = {
  test,
  getUsers,
  createUser,
};
