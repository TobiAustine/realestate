import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    loading: null,
    error: null
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        signIn: (state) => {
            state.loading = true
        },

        signInSuccess: (state, action) =>{
            state.currentUser = action.payload,
            state.loading = false,
            state.error = null
        },

        signInError : (state, action) =>{
            state.error= action.payload,
            state.loading= false
        }
    }

})


export const {signIn, signInSuccess, signInError} = userSlice.actions

export default userSlice.reducer