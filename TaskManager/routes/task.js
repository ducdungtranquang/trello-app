const express = require("express");
const router = express.Router();
const taskController = require("../controller/taskController");

router.post("/", taskController.addTask);
router.get("/getAllTask", taskController.getAllTask);
router.get("/:id",taskController.getUserByTask);
router.put("/edit/:id", taskController.editTask);
router.delete("/del/:id", taskController.deleteTask);

module.exports = router;