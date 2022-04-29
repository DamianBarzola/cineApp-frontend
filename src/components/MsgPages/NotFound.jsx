import React from "react";
import { RiWifiOffLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div
        className="d-flex  align-items-center flex-column pt-md-5"
        style={{ height: "32rem" }}
      >
        <span style={{ fontSize: "120px" }} className="pl-1 m-2">
          Error 404
        </span>

        <h2>Pagina No Encontrada</h2>
        <span className="p-2 ">
          Parece que la página que estas buscando no existe.
        </span>
        <Link to="/movies" className="btn btn-light pe-4 ps-4 p-2 mt-3">
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
