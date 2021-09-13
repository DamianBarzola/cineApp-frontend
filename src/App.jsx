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
          <Route exact path="/movies/:movieId" component={MovieDetails} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/comingsoon" component={ComingSoon} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/" component={Landing} />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
};

export default App;
