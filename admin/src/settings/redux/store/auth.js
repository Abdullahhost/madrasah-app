

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slice/auth";
import lightDarkSlice from "../slice/lightdark";

const store =  configureStore({
    reducer: {
        auth: authSlice.reducer,
        lightdark: lightDarkSlice.reducer
    }
})
export default store