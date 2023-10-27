



import {createSlice} from '@reduxjs/toolkit'


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: JSON.parse(localStorage.getItem('user')) || null,
        loading: false,
        error: null
    },

    reducers: {
        loginStart(state){
           state.loading = true
           state.error = null 
        },

        loginSuccess(state, action){
            state.user = localStorage.setItem('user', JSON.stringify(action.payload))
            state.loading = false
            state.error = null
        },
        loginFailer(state, action){
            state.error = action.payload
            state.user = null
            state.loading = false
        },
        logout(state){
            state.user = null
            state.loading = false
            state.error = null
        }
    }
})

export const authSliceActions = authSlice.actions;

export default authSlice;