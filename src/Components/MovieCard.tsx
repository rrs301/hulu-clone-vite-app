import React from 'react'

function MovieCard(movie:any) {
    const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
  return (
    <div className='inline-block m-2 md:m-3 cursor-pointer group'>
        <img src={IMAGE_BASE_URL+movie.movie.backdrop_path} 
        className="w-[230px] md:w-[340px] object-cover rounded-2xl 
        group-hover:border-[5px] border-gray-400 p-2 transition-all duration-300 ease-in-out"/>
        <h2 className='text-gray-400 mt-2 text-[12px] md:text-[17px] font-bold'>{movie.movie.id%2==0?'WATCH MOVIE':'START WATCHING'}</h2>
        <h2 className='text-white mt-1 transition-all md:text-[22px] 
        group-hover:font-bold'>{movie.movie.original_title}</h2>
    </div>
  )
}

export default MovieCard