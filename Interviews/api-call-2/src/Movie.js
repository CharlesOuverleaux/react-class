import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Movie(){
  const [number, setNumber] = useState(1);
  const [movie, setMovie] = useState("") ;
  const movieNumbers = [1,2,3,4,5,6];

  useEffect(() => {
    async function getMovie() {
      try {
        const response = await axios.get(`https://swapi.dev/api/films/${number}`);
        setMovie(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getMovie();
    // we add in number as a second argument,
    // this way it runs only when number is updated
    // otherwise endless loop bc it runs after each render
  },[number]);

  return(
    <div className="Movie">
      <h1>Star Wars Movies: {movie.title}</h1>
      <select value={number} onChange={e => setNumber(e.target.value)}>
        {movieNumbers.map(n => <option key={n} value={n}>{n}</option>)}
      </select>
      <p>{movie.opening_crawl}</p>
      <ul>
      </ul>
    </div>
  );
}
