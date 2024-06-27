import { Link, useLocation } from "react-router-dom";
import css from "./MovieCard.module.css";

export const MovieCard = ({ movie, path }) => {
  const location = useLocation();

  return (
    <div className={css.movieCard}>
      <Link to={path + movie.id} state={location}>
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
