import { MovieCard } from "../MovieCard/MovieCard";

import css from "./MovieList.module.css";

export const MovieList = ({ movieList, path }) => {
  return (
    <ul className={css.list}>
      {movieList.map((movie) => (
        <li key={movie.id}>{<MovieCard movie={movie} path={path} />}</li>
      ))}
    </ul>
  );
};
