import React from "react";
import { Helmet } from "react-helmet-async";

const Wrapper = ({ children, doc }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://unpkg.com/tailwindcss/dist/preflight.min.css"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/tailwindcss/dist/components.min.css"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/@tailwindcss/forms/dist/forms.min.css"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/tailwindcss/dist/utilities.min.css"
          rel="stylesheet"
        />
      </Helmet>
      {children}
    </>
  );
};

export default Wrapper;
