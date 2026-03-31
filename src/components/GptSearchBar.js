import React, { useRef } from 'react'
import { lang } from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux';
import ai from '../utils/geminiAI';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
    const langKey = useSelector((state) => state.config.lang);
    const searchText = useRef(null);
    const dispatch=useDispatch()
    //search movie in TMDB
    const searchMovieTMDB=async(movie)=>{
        const data=await fetch(
             `/api/search?query=${movie}`
        );

        const json=await data.json();
        return json.results;
    }

    const handleGptSearchClick = async () => {
        console.log(searchText.current.value);
        const gptQuery="Act as a Movie Recommandation System and suggest some movies for the query:"+searchText.current.value+". Only Give me Names of 5 Movies,comma Separated like this example result given ahead.Example Result: Gadar,Sholay,Don,Golmaal";
        //MAKE AN API CALL TO GPT API AND GET MOVIE RESULT
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: gptQuery,
        });

        if(!response.text){
            //TODO:Write Error Handling
        }

        const gptMovies=response.text.split(",");

        const promisedArray=gptMovies.map(movie=>searchMovieTMDB(movie))
        const tmdbResults=await Promise.all(promisedArray);
        console.log(tmdbResults);
        dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));
    }

    return (

        <div className='pt-[2%] md:pt-[10%] flex justify-center'>
            <form className='md:w-1/2 bg-black grid grid-cols-12 p-2' onSubmit={(e) => e.preventDefault()}>
                <input type="text" ref={searchText} placeholder={lang[langKey].gptSearchPlaceHolder} className='col-span-9 rounded-md p-3 m-1 text-black text-lg' />
                <button className='col-span-3 bg-red-600 text-white px-4 py-2 rounded-md' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar