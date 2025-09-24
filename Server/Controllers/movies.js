import Movie from "../models/Movie.js";

    const getMovies = async (req, res) => {
        const movies = await Movie.find();

        res.json({
            success : true, 
            data : movies, 
            message : "Movies Fetched Successfully"
        });
    }
    
    const postMovies = async(req, res) => {
    console.log(`Body Received`, req.body);

    const {
        title,
        description,
        images,
        category,
        director,
        year,
        language,
        rating} = req.body;

        if(!title || !description || !images || !category || !director || !year || !language){
            res.error(400).json({
                success : false,
                data : null,
                message : "Please provide all the fields",
            })
        }
        try {   
        const newMovie = new Movie(
        {
            title,
            description,
            images,
            category,
            director,
            year,
            language,
            rating,
        }
    );

    const savedMovie = await newMovie.save();

        res.status(201).json(
            {
                success : true,
                data : savedMovie,
                message : "Movie added successfully",
            });
        }
        catch(error) {
            res.status(400).json({
                success : false,
                data : null,
                message : "Error adding movie : " + error.message,
            });
        }   
    }

    const getMovieById = async (req, res) => {
        const { id } = req.params;

        try {

        const movie = await Movie.findById(id);

        if (movie) {
            return res.json({
                success : true,
                data : movie,
                message : "Movie fetched successfully"
            })
        }
        else {
            return res.status(404).json({
                success : false,
                data : null,
                message : 'Movie not found',
            });
        }
    } catch (error) 
    {
        return res.status(400).json({
            success : false,
            data : null,
            message : "Invalid movie ID",
        })
    }}

    const getMoviesSearch = async (req, res) => {
        const {q} = req.query;

        const movies = await Movie.find({
            $or: [
                {title : { $regex : q, $options : "i" }},
                {description : {$regex : q, $options : "i"}},
            ]
        })
        if (movies.length === 0) {
            return res.status(404).json({
                success : false,
                data : [],
                message : "No movies found matching your search"
            })
        }
        else {
            return res.json({
                success : true,
                data : movies,
                message : "Movies Fetched Successfully"
            })
        }
    }

    const putMovieById = async (req, res) => {
        const {id} = req.params;

        const {
        title,
        description,
        images,
        category,
        director,
        year,
        language,
        rating} = req.body;

        await Movie.updateOne({_id : id}, {
        title,
        description,
        images,
        category,
        director,
        year,
        language,
        rating,
        });

        const updatedMovie = await Movie.findById(id);

        return res.json({
            success : true,
            data : updatedMovie,
            message : "Movie Updated Successfully",
        });
    }

    const putMovieRatingsById = async(req, res) => {
        const {id} = req.params;

        const {rating} = req.body;

        if (rating < 0 || rating > 5){
            return res.error(404).json(
                {
                    success : false,
                    data : null,
                    message : "Rating should be between 0 and 5"
                }
            )
        }

        await Movie.updateOne({_id : id}, {rating});

        const updatedMovie = await Movie.findById(id);

        return res.json(
            {
                success : true,
                data : updatedMovie,
                message : "Movie Fetched Successfully",
            }
        )
    }

    const deleteMovieById = async (req, res) => {
        try {
            const {id} = req.params;

            await Movie.deleteOne({_id : id});

            return res.json ({
                success : true,
                data : null,
                message : "item Deleted Successfully"
            })
        }
        
        catch(error){
            return res.error(400).json({
                success : false,
                data : null,
                message : "Invalid movie ID",
            })
        }
    }
    
    export {getMovies, postMovies, getMovieById, getMoviesSearch, putMovieById, putMovieRatingsById, deleteMovieById};