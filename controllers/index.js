const LambRecipe = require("../models/lambRecipes");

// Create
const createItem = async (req, res) => {
  try {
    const lambRecipe = await new LambRecipe(req.body);
    await LambRecipe.save();
    return res.status(201).json({
        lambRecipe,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Read
const getAllItems = async (req, res) => {
  try {
    const lambRecipes = await LambRecipe.find();
    return res.status(200).json({ lambRecipes });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// getonebyID
const getItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const lambRecipe = await LambRecipe.findById(id);
    if (lambRecipe) {
      return res.status(200).json({ lambRecipe });
    }
    return res.status(404).send("Lamb Recipe with the specified ID does not exist");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// updating any item we desire
const updateItem = (req, res) => {
  try {
    const { id } = req.params;
    LambRecipe.findByIdAndUpdate(id, req.body, { new: true }, (err, lambRecipe) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!lambRecipe) {
        res.status(500).send("Lamb Recipe not found");
      }
      return res.status(200).json(lambRecipe);
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
// deletedItem
const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await LambRecipe.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Item deleted");
    }
    throw new Error("item not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem,
};
