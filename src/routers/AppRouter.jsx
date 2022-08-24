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
import { login, logout } from "../actions/auth";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import { Redirect } from "react-router-dom";
import SalesPerShow from "../pages/SalesPerShow";
import SalesPerMovie from "../pages/SalesPerMovie";
import SaleSuccess from "../pages/SaleSuccess";
import CancelSale from "../pages/CancelSale";
import TicketCancelSuccess from "../pages/TicketCancelSuccess";
import TicketInfoPerShow from "../pages/TicketInfoPerShow";
import Shows from "../pages/Shows";
import Salas from "../pages/Salas";
import Films from "../pages/Films";
import Butacas from "../pages/Butacas";

const AppRouter = () => {
  const dispatch = useDispatch();
  const [log, setlog] = useState(false);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (!(user == null)) {
      dispatch(login(user.fullname, user.email));
      setlog(true);
    } else {
      // dispatch(logout());
      setlog(false);
    }
  }, [dispatch, log]);

  const handleLogOut = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    setlog(false);
  };
  return (
    <div>
      <Router>
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>
            <PublicRouter exact path="/login" log={log} component={Login} />
            {/* <PrivateRouter exact path="/abm" log={log} component={ABMs} /> */}
            <Route exact path="/shows">
              {!log ? (
                <Redirect to="/login" />
              ) : (
                <Shows handleLogOut={handleLogOut} />
              )}
            </Route>
            <Route exact path="/films">
              {!log ? (
                <Redirect to="/login" />
              ) : (
                <Films handleLogOut={handleLogOut} />
              )}
            </Route>
            <Route exact path="/salas">
              {!log ? (
                <Redirect to="/login" />
              ) : (
                <Salas handleLogOut={handleLogOut} />
              )}
            </Route>
            <Route exact path="/butacas">
              {!log ? (
                <Redirect to="/login" />
              ) : (
                <Butacas handleLogOut={handleLogOut} />
              )}
            </Route>
            <Route exact path="/salespershow">
              {!log ? (
                <Redirect to="/login" />
              ) : (
                <SalesPerShow handleLogOut={handleLogOut} />
              )}
            </Route>
            <Route exact path="/salespermovie">
              {!log ? (
                <Redirect to="/login" />
              ) : (
                <SalesPerMovie handleLogOut={handleLogOut} />
              )}
            </Route>
            <Route exact path="/ticketsInfo/:id">
              {!log ? (
                <Redirect to="/login" />
              ) : (
                <TicketInfoPerShow handleLogOut={handleLogOut} />
              )}
            </Route>

            <Route exact path="/movies/:movieId" component={MovieDetails} />
            <Route exact path="/movies" component={Movies} />

            <Route exact path="/comingsoon" component={ComingSoon} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/tickets" component={Tickets} />
            <Route exact path="/salesuccess" component={SaleSuccess} />
            <Route exact path="/cancelsale" component={CancelSale} />
            <Route
              exact
              path="/cancelsuccess"
              component={TicketCancelSuccess}
            />
            <Route path="/">{<Redirect to="/movies" />}</Route>
            {/* <Route path="/" component={Landing} /> */}
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
