import { useEffect, useState } from "react";
import { Container, MovieList } from "../../components";
import { getRequestedMovie } from "../../service/getMoviesAPI";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    const getMovieData = async () => {
      const { movies } = await getRequestedMovie(query);
      setMovies([...movies]);
    };
    getMovieData();
  }, [query]);

  const onSubmit = (query) => {
    setSearchParams({ query });
  };

  return (
    <Container>
      <SearchBar onSubmit={onSubmit} />
      <MovieList movieList={movies} path="" />
    </Container>
  );
};

export default MoviesPage;
