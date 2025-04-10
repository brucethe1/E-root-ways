import React, { useState } from "react";
import "../App.css"
import { Link } from "react-router-dom";
import { FaHome, FaRoute, FaStar, FaBars } from "react-icons/fa"; // Import some icons from react-icons

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);  // State to handle the sidebar open/close

  const toggleSidebar = () => setIsOpen(!isOpen);  // Function to toggle sidebar

  return (
    <div>
      {/* Button to open the sidebar on small screens */}
      <button
        className="sidebar-toggle"
        onClick={toggleSidebar}
        style={{
          display: isOpen ? "none" : "block",  // Hide the toggle button if sidebar is open
        }}
      >
        <FaBars size={30} />
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>

        {/* Close button for the sidebar */}
        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button>

        <ul className="sidebar-links">
          <li>
            <Link to="/" className="sidebar-link">
              <FaHome size={20} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/routes" className="sidebar-link">
              <FaRoute size={20} />
              <span>Routes</span>
            </Link>
          </li>
          <li>
            <Link to="/favorites" className="sidebar-link">
              <FaStar size={20} />
              <span>Favorites</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay background */}
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Sidebar;
