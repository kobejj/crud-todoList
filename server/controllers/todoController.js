const todoModel = require("../models/Todo");

exports.createTodo = async (req, res) => {
  console.log(req.body);
  const title = req.body.title;

  const task = new todoModel({ title: title });
  console.log(task);
  try {
    await task.save();
    res.send("tasks listed");
  } catch (err) {
    console.log(err);
  }
};

exports.getAllTodos = async (req, res) => {
  todoModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
};

exports.updateTodo = async (req, res) => {
  console.log(req.body);
  const id = req.body.id;
  const newTitle = req.body.title;

  try {
    await todoModel.findByIdAndUpdate(id, {
      title: newTitle,
      isEditing: false,
    });
    res.send("update isComplete");
  } catch (err) {
    console.log(err);
  }
};

exports.updateCompleted = async (req, res) => {
  console.log(req.body);
  const id = req.body.id;
  const newIsComplete = req.body.isComplete;

  try {
    await todoModel.findByIdAndUpdate(id, {
      isComplete: !newIsComplete,
    });
    res.send("update isComplete");
  } catch (err) {
    console.log(err);
  }
};

exports.updateEditing = async (req, res) => {
  console.log(req.body);
  const id = req.body.id;

  try {
    await todoModel.findByIdAndUpdate(id, {
      isEditing: true,
    });
    res.send("update isEditing");
  } catch (err) {
    console.log(err);
  }
};

exports.updateCompletedAll = async (req, res) => {
  console.log(req.body);

  try {
    await todoModel.updateMany(
      {
        isComplete: false,
      },
      { $set: { isComplete: true } }
    );
    res.send("update completedAll");
  } catch (err) {
    console.log(err);
  }
};

exports.editingCancel = async (req, res) => {
  console.log(req.body);
  const id = req.body.id;

  try {
    await todoModel.findByIdAndUpdate(id, {
      isEditing: false,
    });
    res.send("update isEditing");
  } catch (err) {
    console.log(err);
  }
};

exports.deleteTodo = async (req, res) => {
  const id = req.params.id;
  await todoModel.findByIdAndRemove(id).exec();

  res.send("deleted data");
};

exports.deleteCompleted = async (req, res) => {
  console.log(req);
  await todoModel.deleteMany({ isComplete: true }).exec();

  res.send("deleted data");
};
