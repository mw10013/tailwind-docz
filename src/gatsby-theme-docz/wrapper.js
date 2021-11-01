import React from "react";
import { Helmet } from "react-helmet-async";

const Wrapper = ({ children, doc }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://unpkg.com/tailwindcss@2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Helmet>
      {children}
    </>
  );
};

export default Wrapper;
