var express = require('express');
var router = express.Router();
const userController = require('../controller/userController');

router.post("/", userController.addUser);

router.get("/all",userController.getAllUser);

router.get("/:id",userController.getTaskByUser);

router.put("/edit/:id", userController.editUser);

router.delete('/del/:id', userController.delUser);

module.exports = router;
