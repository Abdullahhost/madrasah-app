

import { createSlice } from "@reduxjs/toolkit";

const lightDarkSlice =  createSlice({
    name: 'lightdark',
    initialState: {
        lampmode: false,
    },
    reducers: {
        toggleLamp(state){
            state.lampmode = true
        }
    }
})

export const lightDarkSliceAction = lightDarkSlice.actions

export default lightDarkSlice;