const express = require("express");
const {
  createTodo,
  getAllTodos,
  updateTodo,
  updateCompleted,
  updateEditing,
  updateCompletedAll,
  editingCancel,
  deleteTodo,
  deleteCompleted,
} = require("../controllers/todoController");
const router = express.Router();

router.route("/input").post(createTodo);
router.route("/read").get(getAllTodos);
router.route("/update/todo").put(updateTodo);
router.route("/update/completed").put(updateCompleted);
router.route("/update/editing").put(updateEditing);
router.route("/update/completedAll").put(updateCompletedAll);
router.route("/update/editingCancel").put(editingCancel);
router.route("/delete/:id").delete(deleteTodo);
router.route("/deleteCompleted").delete(deleteCompleted);

module.exports = router;
