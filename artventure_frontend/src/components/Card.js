import React from "react";
import "./Card.css";

/**
 * Card component - wraps content in a styled card with gradient, shadow, and padding.
 * PUBLIC_INTERFACE
 */
function Card({ children, style, className = "" }) {
  return (
    <div
      className={`av-card ${className}`}
      style={style}
      data-testid="av-card"
    >
      {children}
    </div>
  );
}

export default Card;
