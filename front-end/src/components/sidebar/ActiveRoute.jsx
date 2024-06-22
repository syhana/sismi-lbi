import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function ActiveRoute({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to || location.pathname.includes(`${to}/`);
  const activeStyle = {
    backgroundColor: isActive ? "#1B2E5F" : "transparent",
    color: isActive ? "white" : "#000000", 
    fontWeight: isActive ? "bold" : "normal",
  };

  return (
    <Link to={to} style={activeStyle} className="list-item-link">
      {children}
    </Link>
  );
}
