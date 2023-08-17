import axios from 'axios';
import { API_TOKEN, BASE_URL } from '../constant/api';

const baseEndPoint = (path) => {
  return `${BASE_URL}${path}`;
};

const apiCall = async (endpoint, params) => {
  const options = {
    method: 'GET',
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
    const moviesGenre = await apiCall(baseEndPoint('/genre/movie/list'), { language: 'en' });
    return moviesGenre.genres;
  };

export const fetchDiscoverMovies = async (genreId) => {
    const discoverMovies = await apiCall(baseEndPoint('/discover/movie'), { with_genres: genreId });
    console.log(discoverMovies.results)
    return discoverMovies.results;
};

