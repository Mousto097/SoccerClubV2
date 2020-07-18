import React from "react";
import FeaturedPost from "./FeaturedPost";
import Catalogue from "./Catalogue";

const mainFeaturedPost = {
  title: "Consulter le catalogue de cours et les terrains disponibles",
  image: "../img/banner.jpg",
  imgText: "main image description",
  linkText: "Continue reading…",
};

const CourseCatalogueAndFieldAvailability = () => {
  return (
    <div>
      <div>
        <FeaturedPost post={mainFeaturedPost} />
      </div>
      <div>
        <Catalogue />
      </div>
    </div>
  );
};
export default CourseCatalogueAndFieldAvailability;
