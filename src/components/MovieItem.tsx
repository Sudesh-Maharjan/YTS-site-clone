// MovieItem.tsx
import React from "react";
import { FaStar } from "react-icons/fa";

interface Movie {
  id: number;
  url: string;
  title: string;
  year: number;
  rating: number;
  genres: string[];
  large_cover_image: string;
}

interface Props {
  movie: Movie;
}

const MovieItem: React.FC<Props> = ({ movie }) => {
  const { id, url, title, year, rating, genres, large_cover_image } = movie;
  return (
    <div className="group">
      <div className="relative border-4 border-white m-3 p-3 w-48 h-auto rounded-md hover:cursor-pointer hover:border-ytsthemecolor hover:transition duration-700" key={id}>
        <img src={large_cover_image} alt={title} className="w-48 h-auto" />
        <div className="hidden group-hover:block">
          <a className=" hover:bg-black hover:bg-opacity-65 hover:transition duration-1000 absolute top-0 left-0 h-full w-full flex flex-col gap-7 justify-center items-center" href={url}>
            <h1 className="text-3xl"><FaStar /></h1>
            <p className="font-bold text-3xl">{rating}/10</p>
            <p className="font-bold">{genres}</p>
            <button className="group-hover:bg-ytsthemecolor p-2 m-3 hover:transition duration-1000 rounded-md">View Detail</button>
          </a>
        </div>
      </div>
      <h2 className="mx-3 px-3 font-bold">{title.slice(0, 20)}</h2>
      <p className="mx-3 px-3 text-gray-400">{year}</p>
    </div>
  );
};

export default MovieItem;
