import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  //Fetch Dta from TMDB API and uodate store
  const dispatch = useDispatch();
  const popularMovies=useSelector(store=>store.movies.PopularMovies);


  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    console.log(data);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    if(!popularMovies){
      getPopularMovies();
    }
  }, []);
};

export default usePopularMovies;
