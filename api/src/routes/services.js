const { Wallet, User } = require("../db");
const axios = require("axios");

const test = (req, res) => {
  res.send("hola");
};
const logIn = async (req, res) => {
  try {
    const { email, pw } = req.body;

    if (!email || !pw) {
      return res.status(400).send("Data mistakes!");
    }

    const newUser = await User.create({
      name: email,
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
  logIn,
};
