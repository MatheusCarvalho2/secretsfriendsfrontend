import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const isSignedSlice = createSlice({
    name: 'isSigned',
    initialState,
    reducers: {
        setIsSigned: (_state, action) => action.payload
    }
});
export const { setIsSigned } = isSignedSlice.actions;
export default isSignedSlice.reducer;