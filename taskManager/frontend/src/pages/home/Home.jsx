// Import necessary dependencies and components
import React from "react";
import Usefetch from "../../hooks/Usefetch";
import TaskList from "../../componant/taskList/TaskList";

// Functional component for the home page
function Home() {
  // Fetch task data using a custom hook
  const { data, isPending, error } = Usefetch("http://localhost:3002/tasks");
  console.log(data);

  // Render the component
  return (
    <div>
      {error && <div>{error}</div>}

      {isPending && <div>Loading</div>}

      {data && <TaskList data={data} />}
    </div>
  );
}

export default Home;
