import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import EnrollCourse from "./components/EnrollCourse";
import BookCourse from "./components/BookCourse";
import CourseCatalogue from "./components/CourseCatalogue";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/enroll" component={EnrollCourse} />
        <Route path="/book" component={BookCourse} />
        <Route path="/explore" component={CourseCatalogue} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
