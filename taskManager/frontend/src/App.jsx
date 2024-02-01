// Import necessary styles and components
import "./App.css";
import Navbar from "./componant/navbar/Navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home.jsx";
import AddTask from "./pages/addTask/AddTask.jsx";
import Update from "./pages/update/Update.jsx";

// Main application component
function App() {
  // Render the component
  return (
    <div className="app">
      {/* Use React Router for client-side navigation */}
      <Router>
        {/* Display the navigation bar */}
        <Navbar />

        {/* Define routes for different pages */}
        <Routes>
          {/* Route for the home page */}
          <Route exact path="/" element={<Home />} />

          {/* Route for adding a new task */}
          <Route path="/addTask" element={<AddTask />} />

          {/* Route for updating an existing task, with a dynamic parameter (id) */}
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

// Export the component for use in other parts of the application
export default App;
