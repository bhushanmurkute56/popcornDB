import React from 'react'

function MovieCard({_id, title, images, category, year, rating}) {
  return (
    <div className='m-4 w-[300px] bg-red-300 shadow-lg rounded-xl relative'>
        <img src={images[0]} alt={title} className='w-full h-[400px] object-cover rounded-lg' />
        <h2 className='absolute top-0 text-black bg-amber-300/70 w-full text-xl p-2 rounded-lg'>{title}</h2>
        <span className='absolute top-20 right-2 bg-orange-200 p-1 rounded-lg'>{category}</span>
        <span className='absolute bottom-2 left-2 text-3xl'>
            {Array.from({ length : rating}).map((_, index) => {
                return (
                    <span className='text-amber-500' key={index}>
                        ★
                    </span>
                )
            })}

            {Array.from({length: 5 - rating}).map((_, index) => {
                return(
                    <span className='text-white' key={index}>
                        ★
                    </span>
                )
            })}
        </span>
    </div>
  )
}

export default MovieCard;