import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../service/getMoviesAPI";
import noImage from "../../img/noPhoto.jpg";

import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { id } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    const getMovieData = async () => {
      const data = await getMovieById(id + "/credits");
      setActors(data);
    };
    getMovieData();
  }, []);

  if (!actors) return <h2>Loading....</h2>;

  return (
    <ul className={css.castList}>
      {actors.cast.map(({ id, character, name, profile_path }) => (
        <li className={css.castCard} key={id}>
          <p className={css.text}>{"Name: " + name}</p>
          <div className={css.imageWrap}>
            <img
              className={css.castImg}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : noImage
              }
              alt=""
            ></img>
          </div>
          <p className={css.text}>{"Role: " + character}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
