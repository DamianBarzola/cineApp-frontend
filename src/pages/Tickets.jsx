import React, { useEffect, useState } from "react";
import styles from "../styles/Tickets.module.css";
import {loadFilmsAll} from "../actions/film";
import {loadDates, loadFunciones, loadButacas} from "../actions/funcion";

const Tickets = () => {

  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] =useState('');

  const [fechasFunciones, setFechasFunciones] = useState([]);
  const [fechaFuncion, setFechaFuncion] =useState('');

  const [funciones, setFunciones] = useState([]);
  const [funcion, setFuncion] =useState('');
  
  const [butacas, setButacas] = useState([]);
  const [butaca, setButaca] =useState('');
  //Pelicula, dia -> Funciones -> y butaca
  
  useEffect( ()=>{
    const getMovie= async()=>{
        const resMovie= loadFilmsAll();
        setMovies(await resMovie);
    }
    getMovie();
},[]);

  const handleMovie=(event)=>{
    setMovieId(event.target.value);
  }

  useEffect( ()=>{
    const getDate= async()=>{
        const resFecha= loadDates(movieId);
        setFechasFunciones(await resFecha);
    }
    getDate();
  },[movieId]);

    const handleDate=(event)=>{
      setFechaFuncion(event.target.value);
  }

  useEffect( ()=>{
    const getFunciones= async()=>{
        const resFuncion= loadFunciones(movieId, fechaFuncion);
        console.log(resFuncion);
        setFunciones(await resFuncion);
    }
    getFunciones();
  },[movieId, fechaFuncion]);

    const handleFuncion=(event)=>{
      setFuncion(event.target.value);
  }

  useEffect( ()=>{
    const getButacas= async()=>{
        const resButacas= loadButacas(funcion.id);
        setButacas(await resButacas);
    }
    getButacas();
  },[funcion]);

    const handleButaca=(event)=>{
      setButaca(event.target.value);
  }

  return (
    <div className="container">
      <div className="row d-flex justify-content-center text-center p-4 ">
        <div
          className={styles.containerCard + " container col-md-12 p-4 bg-dark"}
        >
          <div className="row">
            <div className="col-md-6">
              <h1>Foto de la Peli</h1>
                  {/* <img
                  className={`${styles.col} ${styles.movieImage}`}
                  src={movie.poster}
                  alt={movie.name}
                  />  */}
            </div>
            <div className="col-md-6">
              <form action="">
                <h1>Boleteria</h1>
                <div>
                  <select
                    className="form-select bg-secondary m-2"
                    aria-label="Default select example"
                    onChange={(e)=>handleMovie(e)}
                    defaultValue={'DEFAULT'}
                    >
                  <option value="DEFAULT" disabled>-- Elegir Pelicula --</option>
                    {movies.map((movie) => (
                    <option value={movie.id} key={movie.id}>{movie.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <select
                    className="form-select bg-secondary m-2"
                    aria-label="Default select example"
                    defaultValue={'DEFAULT'}
                    onChange={(e)=>handleDate(e)}
                    >
                  <option value="DEFAULT" disabled>-- Elegir Fecha --</option>
                    {fechasFunciones.map((fecha) => (
                    <option value={fecha} key={fecha}>{fecha}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <select
                    className="form-select bg-secondary m-2"
                    aria-label="Default select example"
                    required
                    defaultValue={'DEFAULT'}
                    onChange={(e)=>handleFuncion(e)}
                    >
                  <option value="DEFAULT" disabled>-- Elegir Funcion --</option>
                  {funciones.map((funcion) => (
                    <option value={funcion.id} key={funcion.id}>{funcion.horaFuncion}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <select
                    className="form-select bg-secondary m-2"
                    aria-label="Default select example"
                    defaultValue={'DEFAULT'} 
                    onChange={(e)=>handleButaca(e)}
                    >
                  <option value="DEFAULT" disabled>-- Elegir Butaca --</option>
                    {butacas.map((butaca) => (
                      <option value={butaca.id} key={butaca.id}>X: {butaca.position_x} - Y: {butaca.position_y}</option>
                      ))}
                  </select>
                </div>
                <button className="btn btn-primary">ASD</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
