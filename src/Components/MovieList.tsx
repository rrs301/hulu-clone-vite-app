import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'

function MovieList(genreId:any='') {
    const [movieList,setMovieList]=useState<any>([]);
    const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";

    useEffect(()=>{
        console.log(genreId);
        getMovieByGenreId();
    },[])

    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId.genreId).then((resp:any)=>{
            const result=resp.data.results;
            setMovieList(result)
        })
    }
  return (
    <div className='w-full
     overflow-x-auto overflow-scroll
     scroll-smooth scrollbar-hide
    whitespace-nowrap mb-14'>
        {movieList.map((item:any,index:number)=>index<=9&&(
            <div className='inline-block m-2 md:m-3 group
             lex-shrink-0 cursor-pointer'>
                <div className='w-[230px]  absolute bg-slate-600 z-20'></div>
                <img src={IMAGE_BASE_URL+item.backdrop_path}
                    className="w-[230px]  md:w-[370px] 
                    
                    object-cover rounded-2xl group-hover:border-[5px]
                    transition-all duration-200 ease-in-out group-hover:scale-105
                     border-gray-400 p-2"  />
                <h2 className='text-gray-400 mt-2 text-[12px] md:text-[17px] font-bold'>
                    {index%2==0?'WATCH MOVIE':'START WATCHING'}</h2>

                <h2 className='text-white mt-1  transition-all
                 duration-200 ease-in-out text-[17px] md:text-[22px]
                  group-hover:font-bold line-clamp-1'>{item.original_title}</h2>
            </div>
        ))}
    </div>
  )
}

export default MovieList