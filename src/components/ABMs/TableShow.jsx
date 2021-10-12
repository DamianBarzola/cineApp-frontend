import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "reactstrap";
import { loadShows, readShows } from "../../actions/show";
import ElementShow from "./ElementShow";
import FormAddShow from "./FormAddShow";

const TableShow = () => {
  const dispatch = useDispatch();
  const [isLoadingg, setIsLoading] = useState(true);
  const shows = useSelector((state) => state.show.data);

  useEffect(() => {
    setIsLoading(true);
    loadShows().then((showData) => {
      console.log(showData);
      dispatch(readShows(showData));
      setIsLoading(false);
    });
  }, [dispatch]);

  if (isLoadingg) {
    return <Spinner />;
  }
  return (
    <div>
      <div className="container col-md-11  ">
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
                <th>Fecha</th>
                <th>Horario</th>
                <th white-space="nowrap" width="1%" colSpan="2">
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
