import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadFilmsAll, readFilms } from "../../actions/film";
import Spinner from "../Spinner";
import ElementFilm from "./ElementFilm";
import FormAddFilm from "./FormAddFilm";

const TableFilm = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const movies = useSelector((state) => state.film.data);

  useEffect(() => {
    setIsLoading(true);
    loadFilmsAll().then((filmData) => {
      dispatch(readFilms(filmData));
      setIsLoading(false);
    });
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="container col-md-11 ">
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
                <th>Duración</th>
                <th>Poster</th>
                <th>Estado</th>
                <th white-space="nowrap" width="1%" colSpan="2">
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
