const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data/data.json");

const readData = () => {
  try {
    const data = fs.readFileSync(dataPath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading data file:", error);
    return null;
  }
};

const writeData = (data) => {
  try {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), "utf8");
  } catch (error) {
    console.error("Error writing data file:", error);
  }
};
const AddTask = async (req, res) => {
  try {
    const data = readData();

    const uniqueId = Date.now();

    const newTask = { ...req.body, id: uniqueId };

    data.tasks.push(newTask);

    writeData(data);

    res.status(201).json({ message: "Task added successfully", id: uniqueId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const FindPosts = async (req, res) => {
  const data = readData();

  if (data) {
    res.status(200).json(data.tasks);
  } else {
    res.status(500).json({ error: "Failed to retrieve tasks" });
  }
};

const UpdatePost = async (req, res) => {
  try {
    // Read data from the JSON file
    const data = readData();

    // Find the index of the task with the specified id
    const indexToUpdate = data.tasks.findIndex(
      (task) => task.id === parseInt(req.params.id)
    );

    // Check if the task with the specified id exists
    if (indexToUpdate !== -1) {
      // Update the task properties based on req.body
      data.tasks[indexToUpdate] = {
        ...data.tasks[indexToUpdate],
        ...req.body,
      };

      // Write the updated data back to the JSON file
      writeData(data);

      res.status(200).json({
        message: "Task updated successfully",
        updatedTask: data.tasks[indexToUpdate],
      });
    } else {
      res.status(404).json({ message: "Task not found" });
      console.log("data");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const DeletePost = async (req, res) => {
  try {
    // Read data from the JSON file
    const data = readData();

    // Find the index of the task with the specified id
    const indexToDelete = data.tasks.findIndex(
      (task) => task.id === parseInt(req.params.id)
    );

    // Check if the task with the specified id exists
    if (indexToDelete !== -1) {
      // Remove the task from the array
      data.tasks.splice(indexToDelete, 1);

      // Write the updated data back to the JSON file
      writeData(data);

      res.status(200).json({
        message: "Task deleted successfully",
        tasks: data.tasks,
      });
    } else {
      // If the task with the specified id is not found, return a 404 status
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  DeletePost,
  UpdatePost,
  FindPosts,
  AddTask,
};
