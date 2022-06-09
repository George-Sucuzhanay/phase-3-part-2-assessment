const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send("This is the root!"));
router.post("/lambRecipes", controllers.createItem);
router.get("/lambRecipess", controllers.getAllItems);
router.get("/lambRecipess/:id", controllers.getItemById);
router.put("/lambRecipes/:id", controllers.updateItem);
router.delete("/lambRecipes/:id", controllers.deleteItem);

module.exports = router;
