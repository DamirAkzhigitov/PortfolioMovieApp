import axios from "@/api/axios";

export const getTopRatedMovieList = async () => {
  return await axios.get("movie/top_rated").then((res) => res.data);
};
