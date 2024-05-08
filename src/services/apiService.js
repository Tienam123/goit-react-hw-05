import axios from "axios";

export const searchMovie = async (query, page) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmUwNzAxOGU5NzJjNzJlZGQzNjcyMjE4YjAxMzFlNyIsInN1YiI6IjY1OTkyNmIzODliNTYxMDE0OWFiZTM4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MAuwDzphq_k77CDxewoovXsLL4kXZTWKzHx88tueq6w'
        }
    };
    const {data} = await axios.get(url, options)
    return data
}


export const fetchFilms = async ({pageParam}) => {
    const url = `https://api.themoviedb.org/3/discover/movie?page=${pageParam}`;
    const {data} = await axios.get(url, {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmUwNzAxOGU5NzJjNzJlZGQzNjcyMjE4YjAxMzFlNyIsInN1YiI6IjY1OTkyNmIzODliNTYxMDE0OWFiZTM4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MAuwDzphq_k77CDxewoovXsLL4kXZTWKzHx88tueq6w'
        }
    })
    return data
}


export const currentFilm = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

    const {data} = await axios.get(url, {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmUwNzAxOGU5NzJjNzJlZGQzNjcyMjE4YjAxMzFlNyIsInN1YiI6IjY1OTkyNmIzODliNTYxMDE0OWFiZTM4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MAuwDzphq_k77CDxewoovXsLL4kXZTWKzHx88tueq6w'
        }
    })
    return data
}

export const getAllGenres = async () => {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmUwNzAxOGU5NzJjNzJlZGQzNjcyMjE4YjAxMzFlNyIsInN1YiI6IjY1OTkyNmIzODliNTYxMDE0OWFiZTM4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MAuwDzphq_k77CDxewoovXsLL4kXZTWKzHx88tueq6w'
        }
    };
    const {data} = await axios.get(url, options)
    return data;
}


export const getCasts = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmUwNzAxOGU5NzJjNzJlZGQzNjcyMjE4YjAxMzFlNyIsInN1YiI6IjY1OTkyNmIzODliNTYxMDE0OWFiZTM4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MAuwDzphq_k77CDxewoovXsLL4kXZTWKzHx88tueq6w'
        }
    };
    const {data} = await axios.get(url, options)
    return data
}

export const getAllReviews = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmUwNzAxOGU5NzJjNzJlZGQzNjcyMjE4YjAxMzFlNyIsInN1YiI6IjY1OTkyNmIzODliNTYxMDE0OWFiZTM4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MAuwDzphq_k77CDxewoovXsLL4kXZTWKzHx88tueq6w'
        }
    }
    const {data} = await axios.get(url, options);
    return data
}