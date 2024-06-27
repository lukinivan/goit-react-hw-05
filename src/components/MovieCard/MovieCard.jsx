import { Link } from "react-router-dom";
import css from "./MovieCard.module.css";

export const MovieCard = ({ movie, path }) => {
  return (
    <div className={css.movieCard}>
      <Link to={path + movie.id}>
        <img
          className={css.posterImg}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
        />
        <div className={css.titleWrap}>
          <h2>{movie.original_title}</h2>
        </div>
      </Link>
    </div>
  );
};
