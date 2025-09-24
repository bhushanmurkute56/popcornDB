import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../Contraints';
import Stars from "./../components/Stars"

function MovieDetails() {
    const {id} = useParams();

    const [movieDetail, setMovieDetail] = useState({
        _id : "",
        title : "",
        description : "",
        images : [],
        category : "",
        director : "",
        year : "",
        language : "",
        rating : 0,
    });

    const loadMovieDetails = async () => {
        const response = await axios.get(`${API_URL}/movies/${id}`);
        setMovieDetail(response.data.data)
        console.log(response.data.data)
    };

    useEffect(() => {loadMovieDetails()}, [id]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 opacity-50 pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse"></div>
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse"></div>
      </div>

      <div className="relative container mx-auto px-4 py-8 md:py-12">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Movie Poster */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl bg-black/20">
                <img 
                  src={movieDetail.images[0]} 
                  className="w-full h-full object-contain transform transition duration-500 hover:scale-110"
                  alt={movieDetail.title}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x900?text=No+Image+Available';
                  }}
                />
              </div>
            </div>

            {/* Movie Details */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-600">
                {movieDetail.title}
                <span className="text-2xl md:text-3xl ml-4 text-purple-400">
                  {movieDetail.year && `(${movieDetail.year})`}
                </span>
              </h1>

              <div className="flex items-center gap-3">
                <Stars rating={movieDetail.rating}/>
                <span className="text-purple-400 font-medium">({movieDetail.rating}/5)</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  <span className="text-gray-300 font-medium">Director:</span>
                  <span className="text-white">{movieDetail.director}</span>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
                  <span className="text-gray-300 font-medium">Category:</span>
                  <span className="text-white">{movieDetail.category}</span>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  <span className="text-gray-300 font-medium">Language:</span>
                  <span className="text-white">{movieDetail.language}</span>
                </div>
              </div>

              <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 mt-6">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">Synopsis</h3>
                <p className="text-gray-300 leading-relaxed">
                  {movieDetail.description}
                </p>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          {movieDetail.images && movieDetail.images.length > 1 && (
            <div className="mt-8 md:mt-10">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">Gallery</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {movieDetail.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-video relative group overflow-hidden rounded-xl bg-black/20">
                    <img 
                      src={image} 
                      alt={`${movieDetail.title} scene ${index + 1}`}
                      className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x225?text=Image+Not+Available';
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MovieDetails;
