// Import necessary dependencies and styles
import React, { useState } from "react";
import "./addTask.css";
import { useNavigate } from "react-router";

// Functional component for adding tasks
function AddTask() {
  // State variables to manage form inputs
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [DueDate, setDueDate] = useState("");
  const [Priority, setPriority] = useState("");
  const [Status, setStatus] = useState("");

  // Navigation hook to redirect after adding a task
  const navigate = useNavigate();

  // Function to handle the form submission
  const handlePost = (e) => {
    // Create a task object with the form input values
    const task = { Title, Description, DueDate, Priority, Status };
    e.preventDefault();

    // Send a POST request to the server with the task data
    fetch("http://localhost:3002/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    }).then(() => {
      // Redirect to the homepage after successful task addition
      navigate("/");
    });
  };

  // Render the component
  return (
    <div className="addTask">
      <form>
        {/* Input field for task title */}
        <label htmlFor="Title"> Title:</label>
        <input
          placeholder="Enter new Task Title"
          type="text"
          name="Title"
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Textarea for task description */}
        <label htmlFor="Description"> Description:</label>
        <textarea
          className="text-area"
          placeholder="Enter new task description"
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Input field for due date */}
        <label htmlFor="DueDate"> Due Date:</label>
        <input
          type="date"
          name="DueDate"
          value={DueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        {/* Dropdown for task priority */}
        <label htmlFor="Priority">Priority:</label>
        <select
          className="Priority-selection"
          value={Priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>Please choose the priority.</option>
          <option value="high">Hight</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        {/* Input field for task status */}
        <label htmlFor="Status">Status</label>
        <input
          type="text"
          value={Status}
          onChange={(e) => setStatus(e.target.value)}
        />

        {/* Button to trigger the form submission */}
        <div className="btn-container">
          <button className="add-btn" onClick={handlePost}>
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}

// Export the component for use in other parts of the application
export default AddTask;
