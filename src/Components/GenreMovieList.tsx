import React from 'react'
import { IoChevronForwardSharp } from 'react-icons/io5'
import GenresList from '../Constant/GenresList'
import MovieList from './MovieList'

function GenreMovieList() {
  return (
    <div className='p-10 px-10 md:px-20 '>
        { GenresList.genere.map((item,index)=>index<=3&&(
            <div>
                <h2 className='text-white text-[27px] 
                font-bold'>{item.name} <span className='font-normal
                 text-[18px] cursor-pointer text-gray-400 float-right flex items-center'>VIEW ALL <IoChevronForwardSharp className='text-white ml-1'/> </span></h2>
                <MovieList genreId={item.id} />
            </div>
        ))}
    </div>
  )
}

export default GenreMovieList