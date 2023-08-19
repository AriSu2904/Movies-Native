import axios from "axios";
import { API_TOKEN, BASE_URL } from "../constant/api";

const baseEndPoint = (path) => {
  return `${BASE_URL}${path}`;
};

const apiCall = async (endpoint, params) => {
  const options = {
    method: "GET",
    url: endpoint,
    params: params ? params : {},
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    console.log(err);
    return {};
  }
};

export const fetchMoviesGenre = async () => {
  const moviesGenre = await apiCall(baseEndPoint("/genre/movie/list"), {
    language: "en",
  });
  return moviesGenre.genres;
};

export const fetchDiscoverMovies = async (genreId, page) => {
  const discoverMovies = await apiCall(baseEndPoint("/discover/movie"), {
    with_genres: genreId,
    page: page
  });
  return discoverMovies.results;
};
export const fetchMovieDetails = async (movieId) => {
  const movieDetails = await apiCall(baseEndPoint(`/movie/${movieId}`), {
    language: "en-US"
  });
  return movieDetails;
};

export const fetchTrailerMovie = async (movieId) => {
  const trailerMovie = await apiCall(baseEndPoint(`/movie/${movieId}/videos`), {
    language: "en-US"
  });
  const officialTrailer = trailerMovie.results.findLast((res) => res.official === true);
  return officialTrailer;
};

export const fetchReviewMovies = async (movieId) => {
  const movieReviews = await apiCall(baseEndPoint(`/movie/${movieId}/reviews`), {
    language: "en-US"
  })
  return movieReviews.results
}