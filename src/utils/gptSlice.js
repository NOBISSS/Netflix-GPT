import {createSlice} from '@reduxjs/toolkit';

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptState:false
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptState = !state.showGptState
        }
    }
});

export const {toggleGptSearchView} = gptSlice.actions;

export default gptSlice.reducer;