import React from "react";
import { Helmet } from "react-helmet-async";

const Wrapper = ({ children, doc }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        {/* <title>{doc.value.name}</title> */}
        {/* <title>Tailwind Docz</title> */}
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
