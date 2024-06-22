import { cache } from "react";
import { getTopRatedMovieList } from "@/api/movieList";

export default async function TopMoviesPage() {
  const movies = await getTopRatedMovieList();

  console.log("movies: ", movies);

  return (
    <>
      <div className="grid grid-cols-5 gap-1 lg:gap-8">
        {movies.map((item) => (
          <div className="relative">
            <div className="absolute left-0 top-0 flex items-center min-h-10 bg-gradient-to-r from-black w-full text-white p-3 font-bold">
              {item.title}
            </div>
            <img
              alt=""
              width="100%"
              src={"https://image.tmdb.org/t/p/w200/" + item.poster_path}
            ></img>
          </div>
        ))}
      </div>
    </>
  );
}
