const { Wallet } = require("../db");
const { TYPES } = require("../data");

const getWallets = async (req, res) => {
  try {
    const allWallets = await Wallet.findAll();

    res.status(200).json(allWallets);
  } catch (error) {
    console.log("ERROR:  ", error);
    res.status(400).send(error);
  }
};

const createWallet = async (req, res) => {
  try {
    const { name, money } = req.body;
    if (!name || !money) {
      return res.status(400).send("Data mistakes!");
    }

    const newWallet = await Wallet.create({
      name: name,
      money: money,
    });

    res.status(200).send(newWallet);
  } catch (error) {
    console.log("ERROR:  ", error);
    res.status(400).send(error);
  }
};

module.exports = {
  getWallets,
  createWallet,
};
