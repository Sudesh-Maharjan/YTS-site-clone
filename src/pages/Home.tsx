import React from 'react'
import { useEffect, useState } from "react"
import Header from "../components/Header"
import axios from "axios"
import MovieItem from '../components/MovieItem';
import Footer from '../components/Footer';

interface Movie{
  id: number;
  url: string;
  title: string;
  year: number;
  rating: number;
  genres: string[];
  large_cover_image: string;
  date_uploaded_unix: number;
}
const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);//Movie => type specify gareko
  // const [page, setPage] = useState(1);//current page track ma rakhna

   useEffect(() => {
      axios.get(`https://yts.mx/api/v2/list_movies.json`)
      .then((res) =>{
    if(res.data && res.data.data  && res.data.data.movies) {
      const sortedMovies = res.data.data.movies.sort((a: Movie,b: Movie) => {
        return b.year - a.year;
      });
      setMovies(sortedMovies);
    }
  }
   )
   .catch((error) => {
    console.log("Error fetching latest movies:", error)
   });
   },[]);


  return (
    <>
    <Header/>

<h2 className="bg-black rounded-md text-white font-bold px-40 py-4">Latest YIFY Movies Torrents</h2>  
<div className="gap-4 bg-black text-white justify-center items-center flex flex-wrap px-24">
  {
    movies.map((movie: Movie) => (
      <MovieItem key={movie.id} movie={movie} />
    ))
  }
</div>


<Footer/>
    </>
  )
}

export default Home
