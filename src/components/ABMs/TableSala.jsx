import React from "react";
import ElementSala from "./ElementSala";
import FormAddSala from "./FormAddSala";

const data = [
  {
    id: 1,
    name: "Principal",
    state: "Habilitada",
    show: "1",
    butacas: "20",
  },
  {
    id: 2,
    name: "Secundaria",
    state: "Habilitada",
    show: "2",
    butacas: "20",
  },
  {
    id: 3,
    name: "Entrada",
    state: "Habilitada",
    show: "3,4",
    butacas: "10",
  },
  {
    id: 4,
    name: "Trasera",
    state: "Mantenimiento",
    show: "Ninguna",
    butacas: "10",
  },
];
const TableSala = () => {
  return (
    <div>
      <div className="container col-md-9  ">
        <div className="d-flex justify-content-end pr-2">
          <FormAddSala />
        </div>
        <div className="table-responsive">
          <table className="table text-light border-dark">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Estado</th>
                <th>Funciones</th>
                <th>Butacas</th>
                <th white-space="nowrap" width="1%">
                  Accion
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((elemento) => {
                return (
                  <tr key={elemento.id}>
                    <ElementSala data={elemento} />
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableSala;
