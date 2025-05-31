import React from "react";
import "./Sidebar.css";

/**
 * Sidebar navigation or feature container, visually separated via accent/border.
 * PUBLIC_INTERFACE
 */
function Sidebar({ children, style, className = "" }) {
  return (
    <aside
      className={`av-sidebar ${className}`}
      style={style}
      data-testid="av-sidebar"
    >
      {children}
    </aside>
  );
}

export default Sidebar;
