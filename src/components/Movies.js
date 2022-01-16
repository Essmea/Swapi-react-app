import { useState, useEffect } from "react";
import Home from "./Characters";
import styles from '../styles/Movies.module.css'

function Movies() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    async function fetchData() {
        let res = await fetch("https://swapi.dev/api/films/");
        let data = await res.json();
        setData(data.results);
        setLoading(false);
    }
    fetchData();
  },[]);
 

  return (
    <div className={styles.container}>
      {loading && <div className={styles.ldsSpinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
      {data.map((movie) => (
          <Home key={movie.episode_id} movie={movie} />
      ))}
   
    </div>
  );
}

export default Movies;
