import React from "react";
import filter from "../utils/selection-filter";
import library from "../fixtures/embedded-library.json";
import Browse from "../containers/browse";
import FooterContainer from "../containers/footer";

// Import Json with arr of films/videos
// This will simulate database retrieval

const BrowsePage = () => {
  const slides = filter(library);

  return (
    <>
      <Browse slides={slides} />
      <FooterContainer />
    </>
  );
};

export default BrowsePage;
