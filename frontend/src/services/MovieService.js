import axios from 'axios';

const API_URL = 'http://localhost:8080/movies';

export default {
    getAllMovies() {
        return axios.get(API_URL);
    },
    addMovie(movie) {
        return axios.post(API_URL, movie);
    },
    deleteMovie(id) {
        return axios.delete(`${API_URL}/${id}`);
    },
    updateMovie(movie) {
        return axios.put(`${API_URL}/${movie.id}`, movie);
    },
};
