import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import Movies from "./pages/Movies";
import Navbar from "./components/Navbar.jsx";
import ComingSoon from "./pages/ComingSoon";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ABMs from "./pages/ABMs";
import Tickets from "./pages/Tickets";
import Login from "./pages/Login";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>
            <Route exact path="/movies/:movieId" component={MovieDetails} />
            <Route exact path="/abm" component={ABMs} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/comingsoon" component={ComingSoon} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/tickets" component={Tickets} />
            <Route exact path="/login" component={Login} />
            <Route path="/" component={Landing} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </Provider>
  );
};

export default App;
