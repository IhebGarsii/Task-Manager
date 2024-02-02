const express = require("express");

const {
  DeletetTask,
  UpdateTask,
  FindTask,
  AddTask,
  FindOneTask,
} = require("../controller/tasksController");
const router = express.Router();

/* ADD TASK */
router.post("/", AddTask);
/* FIND TASK */
router.get("/", FindTask);
/* FIND ONE TASK */
router.get("/:id", FindOneTask);
/* UPDATEE TASK */
router.put("/:id", UpdateTask);
/* DELETE TASK */
router.delete("/:id", DeleteTask);

module.exports = router;
