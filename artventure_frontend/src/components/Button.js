import React from "react";
import "./Button.css";

/**
 * Reusable Button.
 * Supports "primary" (accent), "secondary", optional "outline", size, and disabled state.
 * PUBLIC_INTERFACE
 */
function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "medium",
  outline = false,
  disabled = false,
  style,
  className = ""
}) {
  const classes = [
    "av-btn",
    `av-btn-${variant}`,
    `av-btn-${size}`,
    outline ? "av-btn-outline" : "",
    className
  ].filter(Boolean).join(" ");
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      style={style}
      data-testid="av-btn"
    >
      {children}
    </button>
  );
}

export default Button;
