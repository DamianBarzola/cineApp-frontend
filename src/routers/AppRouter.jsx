import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieDetails from "../pages/MovieDetails";
import Movies from "../pages/Movies";
import Navbar from "../components/Navbar.jsx";
import ComingSoon from "../pages/ComingSoon";
import Contact from "../pages/Contact";
import Landing from "../pages/Landing";
import Footer from "../components/Footer";
import ABMs from "../pages/ABMs";
import Tickets from "../pages/Tickets";
import Login from "../pages/Login";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  const dispatch = useDispatch();
  const [log, setlog] = useState(false);
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (!(user == null)) {
      dispatch(login(user.fullname, user.email));
      setlog(true);
    } else {
      setlog(false);
    }
  }, [dispatch, log]);
  return (
    <div>
      <Router>
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>
            <PublicRouter exact path="/login" log={log} component={Login} />
            <PrivateRouter exact path="/abm" log={log} component={ABMs} />
            <Route exact path="/movies/:movieId" component={MovieDetails} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/comingsoon" component={ComingSoon} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/tickets" component={Tickets} />
            <Route path="/" component={Landing} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
};

export default AppRouter;
