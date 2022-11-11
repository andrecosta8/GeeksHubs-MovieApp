import axios from 'axios';

const API_KEY = '210d6a5dd3f16419ce349c9f1b200d6d';

const API_BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies= async () => {
        return axios.get(`${API_BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`) 
}

export const getSearchedMovies = async (query) => {
        return await axios.get(`${API_BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)   
}



// Popular:
// https://api.themoviedb.org/3/movie/popular?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1

// Search:
// https://api.themoviedb.org/3/search/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&query=alien&page=1&include_adult=false