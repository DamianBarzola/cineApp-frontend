import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "reactstrap";
import { loadSalas, readSalas } from "../../actions/sala";
import ElementSala from "./ElementSala";
import FormAddSala from "./FormAddSala";

const TableSala = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const salas = useSelector((state) => state.sala.data);

  useEffect(() => {
    setIsLoading(true);
    loadSalas().then((salaData) => {
      console.log(salaData);
      dispatch(readSalas(salaData));
      setIsLoading(false);
    });
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <div className="container col-md-11  ">
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
                <th white-space="nowrap" width="1%" colSpan="2">
                  Accion
                </th>
              </tr>
            </thead>

            <tbody>
              {salas.map((elementoSala) => {
                return (
                  <tr key={elementoSala.id}>
                    <ElementSala data={elementoSala} />
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
