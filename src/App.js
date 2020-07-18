import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import EnrollCourse from "./components/EnrollCourse";
import BookCourse from "./components/BookCourse";
import CourseCatalogue from "./components/CourseCatalogue";


class App extends Component {
  state = {
    language: "fr",
  };

  handleLanguage = (langValue) => {
    console.log("I ==> received: ", langValue);
    this.setState({ language: langValue });
  };

  render() {
    const { t, i18n } = this.props;

    return (
      <BrowserRouter>
        <div className="App">
          <Navbar onSelectLanguage={this.handleLanguage} t={t} />
          <Route exact path="/" component={Home} />
          <Route path="/enroll" component={EnrollCourse} />
          <Route path="/book" component={BookCourse} />
          <Route path="/explore" component={CourseCatalogue} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
