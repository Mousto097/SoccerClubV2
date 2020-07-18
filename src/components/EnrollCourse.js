import React from "react";
import FeaturedPost from "./FeaturedPost";
import SignUpForm from "./SignUp";

const mainFeaturedPost = {
  title: "Inscrivez-vous au Soccer À VOS CRAMPONS OTTAWA",
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
