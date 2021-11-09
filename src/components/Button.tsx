import React from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const styles = {
  primary: "text-white bg-indigo-600 hover:bg-indigo-700 border-transparent",
  secondary:
    "text-indigo-700 bg-indigo-100 hover:bg-indigo-200 border-transparent",
  white: "text-gray-700 bg-white hover:bg-gray-50 border-gray-300",
  small: "py-1.5 text-xs",
  medium: "py-2 text-sm leading-4",
  large: "py-2 text-sm",
  shape: {
    rectangular: {
      small: "px-2.5 rounded",
      medium: "px-3 rounded-md",
      large: "px-4 rounded-md",
    },
    round: {
      small: "px-3 rounded-full",
      medium: "px-3.5 rounded-full",
      large: "px-4 rounded-full",
    },
  },
  disabled: "opacity-50 cursor-not-allowed",
};

export type ButtonProps = {
  variant: "primary" | "secondary" | "white";
  size: "small" | "medium" | "large";
  shape: "rectangular" | "round";
} & React.ComponentPropsWithoutRef<"button">;

// primary className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
// primary className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
// primary className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

// secondary className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
// white className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

// round className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
// round className="inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
// round className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

// disabled class="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"

export const Button = ({
  variant = "primary",
  size = "medium",
  shape = "rectangular",
  disabled = false,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        styles[variant],
        styles[size],
        styles.shape[shape][size],
        disabled ? styles.disabled : "",
        "inline-flex items-center border font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
