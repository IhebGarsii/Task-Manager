const express = require("express");

const {
  DeletePost,
  UpdatePost,
  FindPosts,
  AddTask,
} = require("../controller/tasksController");
const router = express.Router();

/* ADD POST */
router.post("/", AddTask);
/* FIND POST */
router.get("/", FindPosts);
/* UPDATEE POST */
router.put("/:id", UpdatePost);
/* DELETE POST */
router.delete("/:id", DeletePost);

module.exports = router;
