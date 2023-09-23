import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResults } from '../utils/gptSlice';

const GptSearchBar = () => {
    const dispatch=useDispatch();
    const langKey=useSelector(store=>store.config.lang);
    const searchText=useRef(null);

    //Search movie in TMDB
    const searchMovieTMDB=async(movie)=>{
        const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json= await data.json()
        return json.results;

    };

    const handleGptSearchClick= async()=>{
        console.log(searchText.current.value);
        //Make an API call to GPT API and get Movie Results

        const gptQuery="Act as a Movie Recommendation System and suggest some movies for the query:"+searchText.current.value+". only give me names of 5 movies,comma separated like the example result given ahead.Example Result: khusi,jailer,jawan,Msshetty Mrpolishetty,bluebeetel ";

        const gptResults=await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });

          if(!gptResults.choices){
            //TODO:Write Error Handling
          }

          console.log(gptResults.choices?.[0]?.message?.content);
          //Inception, The Social Network, Parasite, La La Land, The Witch
          const gptMovies=gptResults.choices?.[0]?.message?.content.split(",");
          //['Inception', 'The Social Network', 'Parasite', 'La La Land', 'The Witch']

          //for each movie i will search TMDB API

          const promiseArray=gptMovies.map(movie=> searchMovieTMDB(movie));
          //[promise,promise,promise,promise,promise]

          const tmdbResults= await Promise.all(promiseArray); //this promise.all will takes the array of promises
          console.log(tmdbResults);

          dispatch(addGptMovieResults({movieNames:gptMovies,movieResults:tmdbResults}));
    }
  return (
    <div className='pt-[40%] md:pt-[10%] flex justify-center'>
        <form className='p-1 bg-black w-full md:w-1/2 grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type="text" className='p-2  m-4 rounded-sm col-span-9' placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className='py-2 px-4 m-4 -ml-1 bg-red-700 text-white rounded col-span-3' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar