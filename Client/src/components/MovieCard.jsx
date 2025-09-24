import { Link } from 'react-router'
import React from 'react'
import MovieDetails from '../views/MovieDetails'
import { Trash2 } from "lucide-react"
import Stars from './Stars'
import axios from "axios"
import { API_URL } from '../Contraints'
import toast from 'react-hot-toast'

function MovieCard({ _id, title, images, category, year, rating, loadMovies }) {

    const deleteMovie = (e) => {
        const response = axios.delete(`${API_URL}/movies/${_id}/delete`);
        toast.success("Movie Deleted Successfully!");
        loadMovies();
    };
    return (
        <Link to={`/movie/${_id}`} className='m-4 w-[300px] bg-red-300 shadow-lg rounded-xl relative'>
            <img src={images[0]} alt={title} className='w-full h-[400px] object-cover rounded-lg' />
            <h2 className='absolute top-0 text-black bg-amber-300/70 w-full text-xl p-2 rounded-lg'>{title}
                <Trash2 className='inline-block absolute top-3 right-3 text-red-500' onClick={(e) => {
                    deleteMovie();
                    e.preventDefault();
                    e.stopPropagation();
                }}/></h2>
            <span className='absolute top-20 right-2 bg-orange-200 p-1 rounded-lg'>{category}</span>
            <Stars rating={rating} />
        </Link>
    )
}

export default MovieCard;