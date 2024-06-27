import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.Authorization =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzM4MWY2MmQ1NWQ1YzU1NWJmNjVhZDM1YTI5MDJlMyIsIm5iZiI6MTcxOTM5OTc2Ni44MzA5NjEsInN1YiI6IjY2N2FlZTY4NGY1NGI2YmMwNDhiZTcxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ttt7HAZoU-hcEPnFpZ0Rpq288WVnM-nKAny-Fg9NvIQ";

export const getTrendingMovie = async () => {
  const { data } = await axios.get("trending/movie/day", {
    params: {
      language: "en-US",
    },
  });

  return {
    movies: data.results,
    pages: data.total_pages,
    total_results: data.total_results,
  };
};

export const getRequestedMovie = async (query) => {
  const { data } = await axios.get("search/movie", {
    params: {
      query,
      page: 1,
      language: "en-US",
    },
  });

  return {
    movies: data.results,
    pages: data.total_pages,
    total_results: data.total_results,
  };
};

export const getMovieById = async (query) => {
  const { data } = await axios.get("movie/" + query, {
    params: {
      language: "en-US",
    },
  });

  return data;
};
