import React from "react";
import ElementShow from "./ElementShow";
import FormAddShow from "./FormAddShow";

const data = [
  { id: 1, film: "Carreritas", sala: "1" },
  { id: 2, film: "Muerte 2", sala: "2" },
  { id: 3, film: "Terror 16", sala: "3" },
  { id: 4, film: "Comediaa ", sala: "4" },
];
const TableShow = () => {
  return (
    <div>
      <div className="container col-md-9  ">
        <div className="d-flex justify-content-end pr-2">
          <FormAddShow />
        </div>
        <div className="table-responsive">
          <table className="table text-light border-dark">
            <thead>
              <tr>
                <th>Id</th>
                <th>Pelicula</th>
                <th>Sala</th>
                <th white-space="nowrap" width="1%">
                  Accion
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((elemento) => {
                return (
                  <tr key={elemento.id}>
                    <ElementShow data={elemento} />
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

export default TableShow;
