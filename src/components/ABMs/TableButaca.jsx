import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSalas, readSalas } from "../../actions/sala";
import ConectionLost from "../MsgPages/ConectionLost";
import Spinner from "../Spinner";
import ElementButaca from "./ElementButaca";

const TableButaca = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const salas = useSelector((state) => state.sala.data);
  const [sala, setSala] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    loadSalas()
      .then((salaData) => {
        dispatch(readSalas(salaData));
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setError(true);
      });
  }, [dispatch]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSala(value);
  };

  const buscar = (obj, num) => {
    try {
      return obj[num].butaca;
    } catch (e) {
      setSala(0);
      return obj[0].butaca;
    }
  };

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <ConectionLost />;
  }
  return (
    <div>
      <div className="container col-md-11  ">
        <div className="d-flex justify-content-start  pr-2">
          <select className="form-select mt-3 mb-3 " onChange={handleChange}>
            {salas.map((sala, index) => {
              return (
                <option value={index} key={index}>
                  {sala.name}
                </option>
              );
            })}
          </select>
          {/* <FormAddButaca /> */}
        </div>
        <div className="table-responsive">
          <table className="table text-light border-dark">
            <thead>
              <tr>
                <th>Id</th>
                <th>Estado</th>
                <th>Columna</th>
                <th>Fila</th>
                <th white-space="nowrap" width="1%">
                  Accion
                </th>
              </tr>
            </thead>

            <tbody>
              {Object.keys(salas).length !== 0 &&
                buscar(salas, sala).map((elemento) => {
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
