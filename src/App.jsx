import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import Movies from "./pages/Movies";
import Navbar from "./components/Navbar.jsx";
import ComingSoon from "./pages/ComingSoon";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route exact path="/movies/:movieId">
            <MovieDetails />
          </Route>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route exact path="/comingsoon">
            <ComingSoon />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
};

export default App;
