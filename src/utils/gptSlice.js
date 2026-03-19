import {createSlice} from '@reduxjs/toolkit';

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptState:false,
        gptMovies:null,
        movieNames:null,
        movieResults:null,
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptState = !state.showGptState
        },
        addGptMovieResult:(state,action)=>{
            const {movieNames,movieResults}=action.payload;
            state.movieNames=movieNames;
            state.movieResults=movieResults;
        }
    }
});

export const {toggleGptSearchView,addGptMovieResult} = gptSlice.actions;

export default gptSlice.reducer;