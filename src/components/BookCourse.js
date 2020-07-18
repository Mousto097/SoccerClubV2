import React from "react";
import FeaturedPost from "./FeaturedPost";
import BookingForm from "./BookingForm";

const mainFeaturedPost = {
  title: "Reserver un cours dès aujourd'hui",
  image: "../img/banner.jpg",
  imgText: "main image description",
  linkText: "Continue reading…",
};

const BookCourse = () => {
  return (
    <div>
      <div>
        <FeaturedPost post={mainFeaturedPost} />
      </div>
      <div>
        <BookingForm />
      </div>
    </div>
  );
};
export default BookCourse;
