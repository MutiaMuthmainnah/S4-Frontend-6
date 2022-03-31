import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
//import data moviesnya
import data from "../utils/constants/data";
import { useState } from "react";
import { nanoid } from "nanoid";

function Movies() {
  //membuat variable state
  const [movies, setMovies] = useState(data);
  //Function tambah film
  //dijalankan ketika tombol di klik
  function tambahFilm(){
    const movie = {
      id : nanoid,
      title : "Spiral Jigsaw",
      year : "2021",
      type : "Movie",
      poster : "https://picsum.photos/300/400",
    };
    //menambahkan movies ke setmovies
    setMovies([...movies, movie]);
  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {/**
           * Looping data movies: map
           * Render component Movie
           * kirim props movie
           */}
          {
            movies.map(function(movie) {
              return <Movie key={movie.id} movie={movie} />;
            })
          }
        </div>
        <button onClick={tambahFilm}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;
