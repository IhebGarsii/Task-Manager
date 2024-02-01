// Import necessary dependencies from React
import React, { useState } from "react";
import "./taskList.css";
import { Link } from "react-router-dom";

// Functional component for displaying a list of tasks
function TaskList({ data }) {
  // State variable to manage the tasks data
  const [tasks, setTasks] = useState(data);

  // Function to handle task deletion
  const handelDelete = (id) => {
    // Send a DELETE request to the server to remove the task
    fetch(`http://localhost:3002/tasks/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json()) // Parse the JSON response
      .then((data) => {
        console.log("Data received from server:", data.tasks);
        setTasks(data.tasks);

        // Update the tasks state by filtering out the deleted task
        // Assuming you have a setTasks function to update the state
        // setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      })
      .catch((error) => console.error("Error:", error));
  };

  // Function to get the CSS class for priority based on its value
  const getPriorityClass = (priority) => {
    switch (priority) {
      case "high":
        return "high-priority";
      case "medium":
        return "medium-priority";
      case "low":
        return "low-priority";
      default:
        return "";
    }
  };

  // Render the component
  return (
    <div className="blog-list">
      {/* Map through tasks and render each task */}
      {tasks.map((data) => (
        <div className="blog-preview" key={data.id}>
          {/* Display task title, due date, and description */}
          <div className="title-container">
            <div className="title-date">
              <h2>{data.Title}</h2>
              <h3>{data.DueDate} </h3>
            </div>
            <p className="paragraph">{data.Description} </p>
          </div>

          {/* Display task priority, status, update link, and delete button */}
          <div className="right">
            <h3 id="Priority" className={getPriorityClass(data.Priority)}>
              {data.Priority}
            </h3>
            <h3 className="status"> {data.Status} </h3>
            <Link id="update" to={`/update/${data.id}`}>
              Update
            </Link>
            <button onClick={() => handelDelete(data.id)}>delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

// Export the component for use in other parts of the application
export default TaskList;
