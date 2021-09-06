import React, { useState } from "react";
import axios from "axios";

export default function Movie(){
  const [movie, setMovie] = useState("") ;

  async function getMovie() {
    try {
      const response = await axios.get('https://swapi.dev/api/films/1');
      setMovie(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  return(
    <div className="Movie">
      <h1>Star Wars Movies</h1>
      <button onClick={getMovie}>Get Movie</button>
      <p>{movie.title}</p>
    </div>
  );
}
