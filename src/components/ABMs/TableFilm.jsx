import React, { useEffect, useState } from "react";
import Spinner from "../Spinner";
import ElementFilm from "./ElementFilm";
import FormAddFilm from "./FormAddFilm";
// const data = [
//   { id: 1, name: "Carreritas", description: "Solo Gana Uno" },
//   { id: 2, name: "Muerte 2", description: "La mejor" },
//   { id: 3, name: "Terror 16", description: "Miedo miedo" },
//   { id: 4, name: "Comediaa ", description: "ajsjdjsa" },
// ];
const TableFilm = () => {
  const [movies, setmovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("/pelicula/all")
      .then((result) => result.json())
      .then((data) => {
        setmovies(data);

        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="container col-md-9  ">
        <div className="d-flex justify-content-end pr-2">
          <FormAddFilm />
        </div>
        <div className="table-responsive">
          <table className="table text-light border-dark">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th white-space="nowrap" width="1%">
                  Accion
                </th>
              </tr>
            </thead>

            <tbody>
              {movies.map((elemento) => {
                return (
                  <tr key={elemento.id}>
                    <ElementFilm data={elemento} />
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

export default TableFilm;
