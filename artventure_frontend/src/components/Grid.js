import React from "react";
import "./Grid.css";

/**
 * Responsive Grid - arranges children in columns/rows.
 * PUBLIC_INTERFACE
 */
function Grid({ children, columns = 3, gap = "1.5em", style, className = "" }) {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    gap,
    ...style
  };
  return (
    <div className={`av-grid ${className || ""}`} style={gridStyle} data-testid="av-grid">
      {children}
    </div>
  );
}

export default Grid;
