import React, { useState } from "react";
import TableFilm from "../components/ABMs/TableFilm";

import styles from "../styles/ABMs.module.css";
import TableShow from "../components/ABMs/TableShow";
import TableSala from "../components/ABMs/TableSala";
import TableButaca from "../components/ABMs/TableButaca";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/auth";
import { clearFilmData } from "../actions/film";
import { clearShowData } from "../actions/show";
import { clearSalaData } from "../actions/sala";

const ABMs = () => {
  const { auth } = useSelector((state) => state);

  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const handleLogOut = () => {
    dispatch(logout());
    dispatch(clearFilmData());
    dispatch(clearShowData());
    dispatch(clearSalaData());
    window.location.reload(); //ver para cambiar
    JSON.parse(localStorage.removeItem("user"));
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center text-center p-md-4 ">
        <div
          className={styles.containerCard + " container col-md-12 p-4 bg-dark"}
        >
          <div className="d-flex justify-content-around row">
            <div className="col-5 text-start d-flex text-align-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              <h3 className={styles.font}> {auth.fullname}</h3>
            </div>
            <div className="col-5 text-end">
              <button
                className={styles.close + " btn btn-danger"}
                onClick={handleLogOut}
              >
                Cerrar Sesion
              </button>
            </div>
          </div>
          <hr />
          <div className="bg-dark pt-1">
            {" "}
            <div className="tabs ">
              <ul role="tablist" className={styles.tabsList}>
                <li className="tabs_tab-list-item" role="presentation">
                  <button
                    className={
                      activeTab === "1"
                        ? styles.tabsTriggerSelected
                        : styles.tabsTrigger
                    }
                    onClick={() => {
                      toggle("1");
                    }}
                    aria-controls="i0-Section1"
                    aria-selected="false"
                    role="tab"
                    tabIndex="-1"
                  >
                    Peliculas
                  </button>
                </li>
                <li className="tabs_tab-list-item" role="presentation">
                  <button
                    className={
                      activeTab === "2"
                        ? styles.tabsTriggerSelected
                        : styles.tabsTrigger
                    }
                    onClick={() => {
                      toggle("2");
                    }}
                    aria-controls="i1-Section2"
                    aria-selected="false"
                    role="tab"
                    tabIndex="-1"
                  >
                    Funciones
                  </button>
                </li>
                <li className="tabs_tab-list-item" role="presentation">
                  <button
                    className={
                      activeTab === "3"
                        ? styles.tabsTriggerSelected
                        : styles.tabsTrigger
                    }
                    onClick={() => {
                      toggle("3");
                    }}
                    aria-controls="i2-Section3"
                    aria-selected="true"
                    role="tab"
                    tabIndex="0"
                  >
                    Salas
                  </button>
                </li>
                <li className="tabs_tab-list-item" role="presentation">
                  <button
                    className={
                      activeTab === "4"
                        ? styles.tabsTriggerSelected
                        : styles.tabsTrigger
                    }
                    onClick={() => {
                      toggle("4");
                    }}
                    aria-controls="i0-Section1"
                    aria-selected="false"
                    role="tab"
                    tabIndex="-1"
                  >
                    Butacas
                  </button>
                </li>
              </ul>
              <div className="tabs_panels">
                <section
                  className={
                    activeTab === "1"
                      ? styles.tabsPanel
                      : styles.tabsPanelHidden
                  }
                  role="tabpanel"
                  tabIndex="-1"
                >
                  <div className="">
                    <TableFilm />
                  </div>
                </section>
                <section
                  className={
                    activeTab === "2"
                      ? styles.tabsPanel
                      : styles.tabsPanelHidden
                  }
                  role="tabpanel"
                  tabIndex="-1"
                >
                  <div>
                    <TableShow />
                  </div>
                </section>
                <section
                  className={
                    activeTab === "3"
                      ? styles.tabsPanel
                      : styles.tabsPanelHidden
                  }
                  id="i2-Section3"
                  tabIndex="-1"
                >
                  <div>
                    <TableSala />
                  </div>
                </section>
                <section
                  className={
                    activeTab === "4"
                      ? styles.tabsPanel
                      : styles.tabsPanelHidden
                  }
                  id="i2-Section4"
                  tabIndex="-1"
                >
                  <div>{/* <TableButaca /> */}</div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ABMs;
