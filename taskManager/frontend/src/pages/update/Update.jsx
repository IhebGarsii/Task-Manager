// Import necessary dependencies and styles
import React, { useState, useEffect } from "react";
import "./update.css";
import Usefetch from "../../hooks/Usefetch";
import { useParams, useNavigate } from "react-router";

// Functional component for updating tasks
function Update() {
  // State variables to manage form inputs
  const [Title, setTitle] = useState();
  const [Description, setDescription] = useState();
  const [DueDate, setDueDate] = useState();
  const [Priority, setPriority] = useState();
  const [Status, setStatus] = useState();

  // Extract the task ID from the URL parameters
  const { id } = useParams();

  // Fetch task data using a custom hook
  const { data} = Usefetch(
    `http://localhost:3002/tasks/${id}`
  );

  // Navigation hook to redirect after updating a task
  const navigate = useNavigate();

  // Function to handle the form submission for updating a task
  const handelUpdate = (e) => {
    e.preventDefault();
    const task = { Title, Description, DueDate, Priority, Status };

    // Send a PUT request to update the task on the server
    fetch(`http://localhost:3002/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    }).then(() => {
      // Redirect to the homepage after successful task update
      navigate("/");
    });
  };

  // Effect hook to populate the form with existing task data
  useEffect(() => {
    if (data) {
      setTitle(data.task.Title);
      setDescription(data.task.Description);
      setDueDate(data.task.DueDate);
      setPriority(data.task.Priority);
      setStatus(data.task.Status);
      
    }
  }, [data]);

  // Render the component
  return (
    <div className="addTask">
      <form action="">
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
        <label htmlFor="desc"> Description:</label>
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
        <label htmlFor="">Priority:</label>
        <select
          className="Priority-selection"
          value={Priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="">select</option>
          <option value="high">Hight</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        {/* Input field for task status */}
        <label htmlFor="">Status</label>
        <input
          type="text"
          value={Status}
          onChange={(e) => setStatus(e.target.value)}
        />

        {/* Button to trigger the form submission for updating a task */}
        <div className="btn-container">
          <button className="update-btn" onClick={(e) => handelUpdate(e)}>
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

// Export the component for use in other parts of the application
export default Update;
