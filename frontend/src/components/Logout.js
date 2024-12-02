import React from "react";

const Logout = ({ onLogout }) => {
  const handleLogout = () => {
    onLogout(); // App.js'deki isAuthenticated'i false yapar
    alert("You have been logged out.");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
