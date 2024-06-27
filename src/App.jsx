import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AppBar } from "./components";
import { easyLazy } from "./helpers/easyLazy";
// import MovieReviews from "./components/MovieReviews/MovieReviews";

const Home = easyLazy("HomePage");
const Movie = easyLazy("MoviesPage");
const MovieDetails = easyLazy("MovieDetailsPage");
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);
const NotFound = easyLazy("NotFoundPage");

const App = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movie />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
