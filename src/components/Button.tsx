import React from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const styles = {
  primary: "text-white bg-indigo-600 hover:bg-indigo-700 border-transparent",
  secondary:
    "text-indigo-700 bg-indigo-100 hover:bg-indigo-200 border-transparent",
  white: "text-gray-700 bg-white hover:bg-gray-50 border-gray-300",
  small: "px-2.5 py-1.5 text-xs rounded",
  medium: "px-3 py-2 text-sm leading-4 rounded-md",
  large: "px-4 py-2 text-sm rounded-md",
};

type ButtonProps = {
  type: "primary" | "secondary" | "white";
  size: "small" | "medium" | "large";
  children?: React.ReactNode;
};

// primary className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
// secondary className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
// white className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

export const Button = ({
  type = "primary",
  size = "medium",
  children,
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        styles[type],
        styles[size],
        "inline-flex items-center border font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      )}
    >
      {children}
    </button>
  );
};
