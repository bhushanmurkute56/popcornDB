import { useEffect, useState } from 'react'
import axios from "axios"
import MovieCard from "./../components/MovieCard"
import {Search as SearchIcon} from "lucide-react"
import toast, { Toaster } from 'react-hot-toast';

function Home() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState([]);
    const [error, setError] = useState([]);

    const loadMovies = async () => {
        const response = await axios.get("http://localhost:8080/movies")
        setMovies(response.data.data);
    };

    useEffect(() => {loadMovies()}, [])

    const searchMovies = async () => {
        toast.loading(`Search...`, {id : "searching"});
        try {
        const response = await axios.get(`http://localhost:8080/movies/search?q=${search}`);
        toast.dismiss();
        setMovies(response.data.data);
        setError("");
    }
        catch(error){
            toast.dismiss();
            console.log(error);
            toast.error(error.response.data.message, {id : "error"});
            setMovies([]);
            setError(error.response.data.message);
        }
    }

    useEffect(() => {searchMovies()}, [search])

  return (
    <div>
        <div className='rounded-full w-fit mx-auto border py-2 my-2 px-6'>
            <input 
                type="text"
                placeholder='Search Movie...' 
                className='border-none focus:outline-0 w-[350px]'
                value={search}
                onChange={(e) => {setSearch(e.target.value)}}
            />
            <SearchIcon className='inline-block cursor-pointer'/>
        </div>

            {error ? <div className='text-center text-3xl mt-4'>{error}</div> : null}

        <div className='flex flex-wrap justify-center'>
        {movies.map((movieObj) => {
            const {_id, title, images, category, year, rating} = movieObj;

            return (
                <MovieCard 
                key = {_id}
                title = {title}
                images = {images}
                category = {category}
                year = {year}
                rating = {rating}
                />
            )
        })}
        </div>
        <Toaster position='top-right'/>
    </div>
  )
}

export default Home;