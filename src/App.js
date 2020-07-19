import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import messages_en from "./i18n/en_CA.json";
import messages_fr from "./i18n/fr_CA.json";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import EnrollCourse from "./components/EnrollCourse";
import BookCourse from "./components/BookCourse";
import CourseCatalogue from "./components/CourseCatalogue";
import moment from "moment";
import "moment/min/moment-with-locales";
import "moment/locale/en-ca";
import "moment/locale/fr-ca";

let localLang = (() => {
  if (localStorage.getItem("lang")) {
    return localStorage.getItem("lang");
  }
  localStorage.setItem("lang", "en");
  return localStorage.getItem("lang");
})();

let i18nConfig = {
  locale: localLang,
  messages: messages_en,
  formats: {
    number: {
      CAD: {
        style: "currency",
        currency: "USD",
        currencyDisplay: "symbol",
      },
    },
  },
};

class App extends Component {
  constructor(props) {
    super(props);

    let language = localStorage.getItem("lang");
    i18nConfig.messages = language === "fr" ? messages_fr : messages_en;
    moment.locale(language + "-ca");

    this.state = {
      locale: language,
    };

    this.changeLanguage = this.changeLanguage.bind(this);
  }

  // state = {
  //   language: "fr",
  // };

  // handleLanguage = (langValue) => {
  //   console.log("I ==> received: ", langValue);
  //   this.setState({ language: langValue });
  // };

  render() {
    return (
      <IntlProvider
        locale={i18nConfig.locale}
        messages={i18nConfig.messages}
        formats={i18nConfig.formats}
      >
        <BrowserRouter>
          <div className="App">
            <Navbar
              onSelectLanguage={this.handleLanguage}
              changeLanguage={this.changeLanguage}
            />
            <Route exact path="/" component={Home} />
            <Route path="/enroll" component={EnrollCourse} />
            <Route path="/book" component={BookCourse} />
            <Route path="/explore" component={CourseCatalogue} />
            <Footer />
          </div>
        </BrowserRouter>
      </IntlProvider>
    );
  }

  changeLanguage(lang) {
    localStorage.setItem("lang", lang);
    switch (lang) {
      case "fr":
        i18nConfig.messages = messages_fr;
        break;
      case "en":
        i18nConfig.messages = messages_en;
        break;
      default:
        i18nConfig.messages = messages_en;
        break;
    }

    moment.locale(lang + "-ca");

    i18nConfig.locale = localStorage.getItem("lang");
    this.setState({ locale: localStorage.getItem("lang") });
  }
}

export default App;
