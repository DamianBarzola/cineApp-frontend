import React, { useState } from "react";
import TableFilm from "../components/ABMs/TableFilm";

import styles from "../styles/ABMs.module.css";
import TableShow from "../components/ABMs/TableShow";
import TableSala from "../components/ABMs/TableSala";
import TableButaca from "../components/ABMs/TableButaca";

const ABMs = () => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div className="container">
      <div className="row d-flex justify-content-center text-center p-4 ">
        <div
          className={styles.containerCard + " container col-md-12 p-4 bg-dark"}
        >
          <div className="d-flex justify-content-around row">
            <div className="col-4 text-start">
              <h1>Panel ABM</h1>
            </div>
            <div className="col-4 text-end">
              <button className="btn btn-danger `">Cerrar Sesion</button>
            </div>
          </div>
          <hr />
          <div className="bg-dark pt-1">
            {" "}
            <div class="tabs ">
              <ul role="tablist" class={styles.tabsList}>
                <li class="tabs_tab-list-item" role="presentation">
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
                    tabindex="-1"
                  >
                    Peliculas
                  </button>
                </li>
                <li class="tabs_tab-list-item" role="presentation">
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
                    tabindex="-1"
                  >
                    Funciones
                  </button>
                </li>
                <li class="tabs_tab-list-item" role="presentation">
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
                    tabindex="0"
                  >
                    Salas
                  </button>
                </li>
                <li class="tabs_tab-list-item" role="presentation">
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
                    tabindex="-1"
                  >
                    Butacas
                  </button>
                </li>
              </ul>
              <div class="tabs_panels">
                <section
                  className={
                    activeTab === "1"
                      ? styles.tabsPanel
                      : styles.tabsPanelHidden
                  }
                  role="tabpanel"
                  tabindex="-1"
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
                  tabindex="-1"
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
                  tabindex="-1"
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
                  tabindex="-1"
                >
                  <div>
                    <TableButaca />
                  </div>
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
