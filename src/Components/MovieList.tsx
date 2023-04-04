import React, { useEffect, useRef, useState } from 'react'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';

function MovieList(genreId:any) {
    const [movieList,setMovieList]=useState<any>([])
    const elementRef = useRef(null);
    useEffect(()=>{
        getMovieListByGenreId();
    },[])
    const slideLeft=(element:any)=>{
        element.scrollLeft -= 500;
    }
    const slideRight=(element:any)=>{
     
    
        element.scrollLeft += 500;
     
    }
    const getMovieListByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId.genreId).then((resp:any)=>{
            
            setMovieList(resp.data.results);
        })
    }
  return (
    <div className='flex items-center '>
         <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} className='text-[40px] bg-black
         text-white p-2 cursor-pointer rounded-full mb-[120px]  z-10 shadow-2xl' />
        <div id='slider' ref={elementRef} className='w-full overflow-scroll scroll-smooth overflow-x-auto
            whitespace-nowrap scrollbar-hide mb-16'>
        {movieList.map((item:any,index:any)=>index<7&&(
            
                <MovieCard movie={item} />
          
        ))}
          </div>
          <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)} className='text-[40px] bg-black
         text-white p-2 rounded-full mb-[120px] cursor-pointer  z-10'/>
    </div>
  )
}

export default MovieList