import React from "react";
import FeaturedPost from "./FeaturedPost";
import BookingForm from "./BookingForm";
import { FormattedMessage, injectIntl } from "react-intl";

const mainFeaturedPost = {
  title: <FormattedMessage id="book.banner.title" />,
  image: "../img/banner.jpg",
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
