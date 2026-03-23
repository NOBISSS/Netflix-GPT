import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        loading:false,
        nowPlayingMovies:null,
        popularMovies:null,
        trailerVideo:null,
        topRatedMovies:null,
        upcomingMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.loading=false;
            state.nowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.loading=false;
            state.popularMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.loading=false;
            state.topRatedMovies=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.loading=false;
            state.upcomingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.loading=false;
            state.trailerVideo=action.payload;
        }
    }
});

export const {addNowPlayingMovies,addPopularMovies,addTrailerVideo,addTopRatedMovies,addUpcomingMovies}=movieSlice.actions;

export default movieSlice.reducer;