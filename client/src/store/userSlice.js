import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user: null
}
if (localStorage.getItem('user') && localStorage.getItem('user') !== undefined) {
    initialState.user = JSON.parse(localStorage.getItem('user'))
}

const userSlice = createSlice({
    initialState,
    name: 'user',
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const {setUser} = userSlice.actions;
export const selectUser = 
(state) => {
   return state.user.user;
}

export default userSlice.reducer;

export const logout= ()=>{
     setUser(null);
     localStorage.setItem('user',null); 
}