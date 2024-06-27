import css from "./MovieDetailsPage.module.css";
import { Suspense, useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useNavigate,
  useParams,
} from "react-router-dom";
import { getMovieById } from "../../service/getMoviesAPI";
import { Container } from "../../components";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovieData = async () => {
      const data = await getMovieById(id);
      setMovie(data);
    };
    getMovieData();
  }, [id]);

  if (!movie) return <h2>Loading....</h2>;

  const {
    poster_path,
    original_title,
    release_date,
    overview,
    vote_average,
    genres,
  } = movie;

  return (
    <Container>
      <Link className={css.goBack} to="/">
        Go Back
      </Link>
      <div className={css.detailsWrap}>
        <img
          className={css.posterImg}
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt=""
        />
        <div className={css.infoWrap}>
          <h2>{original_title + "  (" + release_date + ")"}</h2>
          <p>User score {vote_average}</p>
          <div className={css.overview}>
            <h3>Overview</h3>
            <p>{overview}</p>
          </div>
          <div className={css.genres}>
            <h3>Genres</h3>
            <ul className={css.genresList}>
              {genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <nav>
        <ul className={css.navigation}>
          <li className={css.navLink}>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li className={css.navLink}>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetailsPage;
