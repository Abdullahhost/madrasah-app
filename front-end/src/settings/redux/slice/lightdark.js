

import { createSlice } from '@reduxjs/toolkit';


const lightDarkSlice = createSlice({
    name: 'lightToggle',
    initialState: {
        dark: false
    },
    reducers: {
        toggleDark(state){
            state.dark = !state.dark
        }
    }
})
export const darkSliceAction = lightDarkSlice.actions;

export default lightDarkSlice;