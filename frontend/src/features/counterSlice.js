import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        adress: "kigali",
        authorized: false,
        voterAuthorized: true,
        isVoter: false,
        isAdmin: false,
    },
    reducers: {
        setAuth: state => {
            state.authorized = !state.authorized
        },
        setvoterAuthorized: state => {
            state.voterAuthorized = !state.voterAuthorized
        },
        setIsAdmin: state => {
            state.isAdmin = !state.isAdmin

        },
        setisVoter: state => {
                state.isVoter = !state.isVoter
            }
            // setAdress: (state, action) => {
            //     state.adress = action.payload;
            // }
    },

})

// Action creators are generated for each case reducer function
export const { setAuth, setvoterAuthorized, setIsAdmin, setisVoter } = counterSlice.actions

export default counterSlice.reducer