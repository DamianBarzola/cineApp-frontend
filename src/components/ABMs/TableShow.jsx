import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Spinner";
import { loadShows, readShows } from "../../actions/show";
import { loadSalas, readSalas } from "../../actions/sala";
import { loadFilmsAll, readFilms } from "../../actions/film";
import ConectionLost from "../MsgPages/ConectionLost";
import ElementShow from "./ElementShow";
import FormAddShow from "./FormAddShow";
import { RiFileList2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const TableShow = () => {
  const dispatch = useDispatch();
  const [isLoadingg, setIsLoading] = useState(true);
  const shows = useSelector((state) => state.show.data);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    loadFilmsAll()
      .then((filmData) => {
        dispatch(readFilms(filmData));
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
      });
    loadSalas()
      .then((salaData) => {
        dispatch(readSalas(salaData));
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
      });
    loadShows()
      .then((showData) => {
        dispatch(readShows(showData));
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setError(true);
      });
  }, [dispatch]);

  if (isLoadingg) {
    return <Spinner />;
  }
  if (error) {
    return <ConectionLost />;
  }
  return (
    <div>
      <div className="container col-md-11">
        <div className="d-flex justify-content-between pr-2">
          <Link to="/salespershow" className="btn btn-info  mb-2">
            <RiFileList2Line
              style={{
                fontSize: "25px",
                paddingBottom: "4px",
                paddingRight: "4px",
              }}
            />
            Ventas por Función
          </Link>
          <FormAddShow />
        </div>
        <div className="table-responsive">
          <table className="table text-light border-dark">
            <thead>
              <tr>
                <th>Id</th>
                <th>Pelicula</th>
                <th>Sala</th>
                <th>Fecha</th>
                <th>Horario</th>
                <th white-space="nowrap" width="1%" colSpan="3">
                  Accion
                </th>
              </tr>
            </thead>

            <tbody>
              {shows.map((elementoShow) => {
                return (
                  <tr key={elementoShow.id}>
                    <ElementShow data={elementoShow} />
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
