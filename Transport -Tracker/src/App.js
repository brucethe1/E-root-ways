import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./ pages/ HomePage";
import FavoritesPage from "./ pages/FavoritesPage";
import Sidebar from "./components/Sidebar";
import RoutesPage from "./ pages/RoutesPage";
const App = () => {
  return (
    <Router>
      <Sidebar />
      <div style={{ marginLeft: "250px", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/routes" element={<RoutesPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
