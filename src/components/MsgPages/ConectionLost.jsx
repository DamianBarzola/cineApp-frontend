import React from "react";
import { RiWifiOffLine } from "react-icons/ri";

const ConectionLost = () => {
  return (
    <div>
      <div
        className="d-flex  align-items-center flex-column pt-md-5"
        style={{ height: "32rem" }}
      >
        <RiWifiOffLine style={{ fontSize: "170px" }} className="pl-1 m-2" />
        <h2>Conexión Perdida</h2>
        <span className="p-2 ">
          Parece que hubo un problema a la hora de conectarse con la base de
          datos.
        </span>
        <button
          className="btn btn-light pe-4 ps-4 p-2 mt-3"
          onClick={() => {
            window.location.reload();
          }}
        >
          Recargar
        </button>
      </div>
    </div>
  );
};

export default ConectionLost;
