import React from "react";
import { Helmet } from "react-helmet-async";

const Wrapper = ({ children, doc }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://unpkg.com/tailwindcss/dist/base.css"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/@tailwindcss/forms/dist/forms.css"
          rel="stylesheet"
        />

        <link
          href="https://unpkg.com/tailwindcss/dist/components.css"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/@tailwindcss/typography/dist/typography.css"
          rel="stylesheet"
        />

        <link
          href="https://unpkg.com/tailwindcss/dist/utilities.css"
          rel="stylesheet"
        />
      </Helmet>
      {children}
    </>
  );
};

export default Wrapper;
