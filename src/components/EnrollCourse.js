import React from "react";
import FeaturedPost from "./FeaturedPost";
import SignUpForm from "./SignUp";
import { FormattedMessage, injectIntl } from "react-intl";

const mainFeaturedPost = {
  title: <FormattedMessage id="enroll.banner.title" />,
  image: "../img/banner.jpg",
  imgText: "main image description",
};

const EnrollCourse = () => {
  return (
    <div>
      <div>
        <FeaturedPost post={mainFeaturedPost} />
      </div>
      <div>
        <SignUpForm />
      </div>
    </div>
  );
};
export default EnrollCourse;
