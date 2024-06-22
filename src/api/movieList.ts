import axios from "@/api/axios";
import { MovieItem } from "@/types/movies";

export const getTopRatedMovieList = async () => {
  return await axios
    .get<{ results: MovieItem[] }>("movie/top_rated")
    .then((res) => res.data.results);
};
