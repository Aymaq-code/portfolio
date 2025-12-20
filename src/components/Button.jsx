import { Link } from "react-router-dom";
import "./button.css";

function Button({
  children,
  type = "primary", // primary | secondary | outline | default
  size = "md", // sm | md | lg
  disabled = false,
  className = "",
  onClick,
  to,
}) {
  const base = "btn";

  const sizes = {
    sm: "btn--sm",
    md: "btn--md",
    lg: "btn--lg",
  };

  const variants = {
    default: "btn--default",
    primary: "btn--primary",
    submit: "btn--primary",
    secondary: "btn--secondary",
    outline: "btn--outline",
  };

  const classes = `
    ${base}
    ${sizes[size]}
    ${variants[type]}
    ${disabled ? "btn--disabled" : ""}
    ${className}
  `;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}

export default Button;
