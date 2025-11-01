import React from "react";
import clsx from "clsx";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline" | "danger";
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  fullWidth = false,
  className,
}) => {
  const baseStyles =
    "px-5 py-2 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-300",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  const buttonClass = clsx(
    baseStyles,
    variants[variant],
    fullWidth && "w-full",
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={buttonClass}
    >
      {label}
    </button>
  );
};

export default Button;
