import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../service/getMoviesAPI";
import css from "./MovieReviews.module.css";
import noImage from "../../img/noPhoto.jpg";

const MovieReviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const getMovieData = async () => {
      const data = await getMovieById(id + "/reviews");
      setReviews(data);
    };
    getMovieData();
  }, [id]);

  if (!reviews) return <h2>Loading....</h2>;

  return (
    <ul className={css.reviewsList}>
      {reviews.results.map(
        ({
          id,
          author,
          content,
          created_at,
          author_details: { avatar_path },
        }) => (
          <li className={css.reviewItem} key={id}>
            <div className={css.infoWrap}>
              <img
                className={css.authorImg}
                src={
                  avatar_path
                    ? `https://image.tmdb.org/t/p/w500${avatar_path}`
                    : noImage
                }
                alt=""
              ></img>
              <div className={css.authorWrap}>
                <h3>{author}</h3>
                <p>{created_at}</p>
              </div>
            </div>
            <p className={css.text}>{content}</p>
          </li>
        )
      )}
    </ul>
  );
};

export default MovieReviews;
