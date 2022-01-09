const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const todoRouter = require("./routes/todoRoutes");

const app = express();

app.use(express.json());
app.use(cors());

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(todoRouter);

app.listen(5000, () => {
  console.log("server is listening port 5000");
});

//const todoModel = require("./models/Todo");
// app.post("/input", async (req, res) => {
//   console.log(req.body);
//   const title = req.body.title;

//   const task = new todoModel({ title: title });
//   console.log(task);
//   try {
//     await task.save();
//     res.send("tasks listed");
//   } catch (err) {
//     console.log(err);
//   }
// });

// app.get("/read", async (req, res) => {
//   todoModel.find({}, (err, result) => {
//     if (err) {
//       res.send(err);
//     }
//     res.send(result);
//   });
// });

// app.put("/update/todo", async (req, res) => {
//   console.log(req.body);
//   const id = req.body.id;
//   const newTitle = req.body.title;

//   try {
//     await todoModel.findByIdAndUpdate(id, {
//       title: newTitle,
//       isEditing: false,
//     });
//     res.send("update isComplete");
//   } catch (err) {
//     console.log(err);
//   }
// });

// app.put("/update/completed", async (req, res) => {
//   console.log(req.body);
//   const id = req.body.id;
//   const newIsComplete = req.body.isComplete;

//   try {
//     await todoModel.findByIdAndUpdate(id, {
//       isComplete: !newIsComplete,
//     });
//     res.send("update isComplete");
//   } catch (err) {
//     console.log(err);
//   }
// });

// app.put("/update/editing", async (req, res) => {
//   console.log(req.body);
//   const id = req.body.id;

//   try {
//     await todoModel.findByIdAndUpdate(id, {
//       isEditing: true,
//     });
//     res.send("update isEditing");
//   } catch (err) {
//     console.log(err);
//   }
// });

// app.put("/update/completedAll", async (req, res) => {
//   console.log(req.body);

//   try {
//     await todoModel.updateMany(
//       {
//         isComplete: false,
//       },
//       { $set: { isComplete: true } }
//     );
//     res.send("update completedAll");
//   } catch (err) {
//     console.log(err);
//   }
// });

// app.put("/update/editingCancel", async (req, res) => {
//   console.log(req.body);
//   const id = req.body.id;

//   try {
//     await todoModel.findByIdAndUpdate(id, {
//       isEditing: false,
//     });
//     res.send("update isEditing");
//   } catch (err) {
//     console.log(err);
//   }
// });

// app.delete("/delete/:id", async (req, res) => {
//   const id = req.params.id;
//   await todoModel.findByIdAndRemove(id).exec();

//   res.send("deleted data");
// });

// app.delete("/deleteCompleted", async (req, res) => {
//   console.log(req);
//   await todoModel.deleteMany({ isComplete: true }).exec();

//   res.send("deleted data");
// });
