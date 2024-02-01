// Import necessary dependencies from React and react-router-dom
import { Link } from "react-router-dom";
import "./navbar.css";

// Functional component for the navigation bar
const Navbar = () => {
  // Render the component
  return (
    <div className="navbar">
      {/* Application logo */}
      <h1 className="logo">Task Manager</h1>

      {/* Navigation links */}
      <div className="nav">
        {/* Link to the home page */}
        <Link className="nav-link" to="/">
          Home
        </Link>

        {/* Link to the Add Task page */}
        <Link className="nav-link" to="/addTask">
          Add Task
        </Link>
      </div>
    </div>
  );
};

// Export the component for use in other parts of the application
export default Navbar;
