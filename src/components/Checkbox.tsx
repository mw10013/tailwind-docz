import React from "react";

export type CheckboxProps = {
  id: string;
  label: string;
  indeterminate?: boolean;
} & Omit<React.ComponentPropsWithoutRef<"input">, "children">;

export const Checkbox = ({
  id,
  label,
  indeterminate = false,
  ...props
}: CheckboxProps) => {
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (ref && ref.current && indeterminate !== undefined) {
      ref.current.indeterminate = indeterminate;
    }
  }, [ref, indeterminate]);

  return (
    <div className="relative flex items-start">
      <div className="flex items-center h-5">
        <input
          id={id}
          type="checkbox"
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          ref={ref}
          {...props}
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor={id} className="font-medium text-gray-700">
          {label}
        </label>
      </div>
    </div>
  );
};

/*
<div class="px-4 py-12 flex items-center justify-center bg-white">
  <div class="w-full max-w-lg mx-auto">
    <fieldset class="space-y-5">
      <legend class="sr-only">Notifications</legend>
      <div class="relative flex items-start">
        <div class="flex items-center h-5">
          <input
            id="comments"
            aria-describedby="comments-description"
            name="comments"
            type="checkbox"
            class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
        </div>
        <div class="ml-3 text-sm">
          <label for="comments" class="font-medium text-gray-700">
            New comments
          </label>
          <span id="comments-description" class="text-gray-500">
            <span class="sr-only">New comments</span> so you always know
            what's happening.
          </span>
        </div>
      </div>
      */
