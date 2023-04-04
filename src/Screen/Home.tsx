import React from 'react'
import GenereMovieList from '../Components/GenereMovieList'


import Header from '../Components/Header'
import Hero from '../Components/Hero'

function Home() {
  return (
    <div>
        <Header/>

        <Hero/>
       
       <GenereMovieList/>
      
    </div>
  )
}

export default Home