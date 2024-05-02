import React, { useState } from "react";
import { useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import MovieItem from "../components/MovieItem";
import Footer from "../components/Footer";

interface Movie{
   id: number;
   url: string;
   title: string;
   year: number;
   rating: number;
   genres: string[];
   large_cover_image: string;
}

const Browse = () => {
  const [movies, setMovies] = useState<Movie[]>([]);//Movie => type specify gareko
  const [page, setPage] = useState(1);//current page track ma rakhna
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios.get(`https://yts.mx/api/v2/list_movies.json?page=${page}`).then(
      (res) => {
         if (res.data && res.data.data && res.data.data.movies) {
            setMovies(res.data.data.movies);
            setTotalPages(Math.ceil(res.data.data.movie_count / 20));
          }
      }
    )
    .catch((error) => {
      console.log("Error fetching movies:", error);
    });
  }, [page]);

  const handlePrevPage = () => {
   if (page > 1) {
     setPage(page - 1);
   }
 };

 const handleNextPage = () => {
   setPage(page + 1);
 };

 const handlePageClick = (pageNumber: number) => {
   setPage(pageNumber);

 };

 const renderPageNumbers = () => {
   const maxPages = Math.min(totalPages, 8); // Maximum 8 clickable pages
   const startPage = Math.max(1, page - 4);
   const endPage = Math.min(totalPages, page + 3);

   const pageNumbers = [];
   for (let i = startPage; i <= endPage; i++) {
     pageNumbers.push(
       <button
         key={i}
         className={`mx-1 p-2  ${
           page === i ? " text-white px-4 hover:bg-ytsthemecolor border bg-ytsthemecolor" : " hover:bg-ytsthemecolor px-4 text-white border hover:text-white"
         } rounded-md`}
         onClick={() => handlePageClick(i)}
       >
         {i}
       </button>
     );
   }
   return pageNumbers;
 };

  return (
    <>
      <Header />
<h1 className="text-ytsthemecolor bg-black p-2 text-center text-2xl">YIFY Movies</h1>
      {/* Pagination start */}
      <div className="flex justify-center py-4 bg-black">
        <button
          onClick={handlePrevPage}
          className="bg-black hover:bg-ytsthemecolor text-white font-bold py-2 px-4 mx-2 rounded"
        >
          Prev
        </button>
        {renderPageNumbers()}
        <button
          onClick={handleNextPage}
          className="bg-black hover:bg-ytsthemecolor text-white font-bold py-2 px-4 mx-2 rounded"
        >
          Next
        </button>
      </div>
      {/* Pagination end */}

      <div className="gap-4 bg-black text-white justify-center items-center flex flex-wrap px-24">
        {movies.map((movie: Movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
      <Footer/>
    </>
  );
};

export default Browse;
