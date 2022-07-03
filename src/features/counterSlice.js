import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        adress: "kigali",
        authorized: false,
    },
    reducers: {
        setAuth: state => {
                state.authorized = !state.authorized
            }
            // setAdress: (state, action) => {
            //     state.adress = action.payload;
            // }
    }
})

// Action creators are generated for each case reducer function
export const { setAuth } = counterSlice.actions

export default counterSlice.reducer