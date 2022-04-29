import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loadFilmsAll, readFilms } from "../../actions/film";
import ConectionLost from "../MsgPages/ConectionLost";
import Spinner from "../Spinner";
import ElementFilm from "./ElementFilm";
import FormAddFilm from "./FormAddFilm";
import { RiFileList2Line } from "react-icons/ri";

const TableFilm = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const movies = useSelector((state) => state.film.data);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    loadFilmsAll()
      .then((filmData) => {
        dispatch(readFilms(filmData));
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setError(true);
      });
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <ConectionLost />;
  }

  return (
    <div>
      <div className="container col-md-11 ">
        <div className="d-flex justify-content-between pr-2">
          <Link to="/salespermovie" className="btn btn-info  mb-2">
            <RiFileList2Line
              style={{
                fontSize: "25px",
                paddingBottom: "4px",
                paddingRight: "4px",
              }}
            />
            Ventas por Película
          </Link>
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
