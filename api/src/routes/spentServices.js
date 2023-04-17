const { Spent } = require("../db");

const getSpents = async (req, res) => {
  try {
    const allSpents = await Spent.findAll();

    res.status(200).json(allSpents);
  } catch (error) {
    console.log("ERROR:  ", error);
    res.status(400).send(error);
  }
};
const createSpent = async (req, res) => {
  try {
    const { name, type, amount, place } = req.body;

    if (!name || !type || !amount || !place) {
      return res.status(400).send("Data mistakes!");
    }
    const newSpent = await Spent.create({
      name: name,
      type: type,
      amount: amount,
      place: place,
    });

    res.status(200).send(newSpent);
  } catch (error) {
    console.log("ERROR:  ", error);
    res.status(400).send(error);
  }
};
const deleteSpent = async (req, res) => {
  try {
    const { id } = req.params;
    const spent = await Spent.findOne({
      where: {
        id: id,
      },
    });
    if (spent.length === 0) {
      res.status(400).send("Spent not found");
    } else {
      await spent.destroy({ where: { id: id } });

      return res.status(200).send("Spent deleted");
    }
  } catch (error) {
    console.log("ERROR:  ", error);
    res.status(400).send(error);
  }
};
const getSpentsById = async (req, res) => {
  try {
    const { id } = req.params;
    const spent = await Spent.findOne({
      where: {
        id: id,
      },
    });
    if (spent.length === 0) {
      res.status(400).send("Spent not found");
    } else {
      return res.status(200).send(spent);
    }
  } catch (error) {
    console.log("ERROR:  ", error);
    res.status(400).send(error);
  }
};
module.exports = {
  createSpent,
  getSpents,
  deleteSpent,
  getSpentsById,
};
