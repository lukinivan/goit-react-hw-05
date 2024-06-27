import { useEffect, useState } from "react";
import { Container, MovieList } from "../../components";
import { getTrendingMovie } from "../../service/getMoviesAPI";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovieData = async () => {
      const { movies } = await getTrendingMovie();
      setMovies([...movies]);
    };
    getMovieData();
  }, []);
  return (
    <Container>
      <h1>The Most Popular Today</h1>
      <MovieList movieList={movies} path="movies/" />
    </Container>
  );
};

export default HomePage;
