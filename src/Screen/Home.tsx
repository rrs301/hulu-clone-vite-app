import React from 'react'
import GenreMovieList from '../Components/GenreMovieList'

import Header from '../Components/Header'
import Hero from '../Components/Hero'

function Home() {
  return (
    <div>
        <Header/>

        <Hero/>
        <GenreMovieList/>
      
    </div>
  )
}

export default Home