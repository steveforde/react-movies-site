// src/services/api.js
const API_KEY = "d8b62a72c6a33bd0cbc0c1fd90e38a43"; 
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
  try {
    console.log("getPopularMovies called. API_KEY:", API_KEY); // ADD THIS
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("getPopularMovies API Response Data:", data); // ADD THIS
    return data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    throw error; // Re-throw so calling function can handle
  }
};

export const searchMovies = async (query) => {
  try {
    console.log("searchMovies called.  Query:", query, "API_KEY:", API_KEY); // ADD THIS
    const encodedQuery = encodeURIComponent(query);
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodedQuery}&page=1&include_adult=false`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("searchMovies API Response Data:", data); // ADD THIS
    return data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
};