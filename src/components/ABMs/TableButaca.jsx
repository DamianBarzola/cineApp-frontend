import React from "react";
import ElementButaca from "./ElementButaca";
import FormAddButaca from "./FormAddButaca";

const data = [
  { id: 1, sala: "1", state: "Ocupada" },
  { id: 2, sala: "1", state: "Ocupada" },
  { id: 3, sala: "1", state: "Ocupada" },
  { id: 4, sala: "1", state: "Ocupada" },
  { id: 5, sala: "1", state: "Ocupada" },
  { id: 6, sala: "1", state: "Ocupada" },
  { id: 7, sala: "2", state: "Ocupada" },
  { id: 8, sala: "2", state: "Ocupada" },
  { id: 9, sala: "2 ", state: "Libre" },
  { id: 10, sala: "2 ", state: "Libre" },
  { id: 11, sala: "3 ", state: "Libre" },
  { id: 12, sala: "3 ", state: "Libre" },
  { id: 13, sala: "3 ", state: "Libre" },
  { id: 14, sala: "3 ", state: "Libre" },
  { id: 15, sala: "3 ", state: "Libre" },
  { id: 16, sala: "4 ", state: "Libre" },
  { id: 17, sala: "4 ", state: "Libre" },
  { id: 18, sala: "4 ", state: "Libre" },
  { id: 19, sala: "4 ", state: "Libre" },
  { id: 20, sala: "4 ", state: "Libre" },
];
const TableButaca = () => {
  return (
    <div>
      <div className="container col-md-9  ">
        <div className="d-flex justify-content-end pr-2">
          <FormAddButaca />
        </div>
        <div className="table-responsive">
          <table className="table text-light border-dark">
            <thead>
              <tr>
                <th>Id</th>
                <th>Sala</th>
                <th>Estado</th>
                <th white-space="nowrap" width="1%">
                  Accion
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((elemento) => {
                return (
                  <tr key={elemento.id}>
                    <ElementButaca data={elemento} />
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

export default TableButaca;
