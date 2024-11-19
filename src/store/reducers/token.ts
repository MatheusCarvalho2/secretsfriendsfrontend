import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setToken: (_state, action) => action.payload,
    }
});

export const { setToken } = tokenSlice.actions;
export default tokenSlice.reducer;