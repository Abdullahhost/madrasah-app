

import { configureStore } from '@reduxjs/toolkit';
import lightDarkSlice from '../slice/lightdark';
import authSlice from '../slice/auth';

const store = configureStore({
    reducer: {
        dark: lightDarkSlice.reducer,
        auth: authSlice.reducer
    }
})
export default store;

