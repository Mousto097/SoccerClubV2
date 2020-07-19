import React from "react";
import FeaturedPost from "./FeaturedPost";
import Catalogue from "./Catalogue";
import { FormattedMessage, injectIntl } from "react-intl";

const mainFeaturedPost = {
  title: <FormattedMessage id="programs.banner.title" />,
  image: "../img/banner.jpg",
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
