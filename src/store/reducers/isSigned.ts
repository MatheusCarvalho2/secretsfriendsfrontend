import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    isSigned: ''
};
const isSignedSlice = createSlice({
    name: 'isSigned',
    initialState,
    reducers: {
        setIsSigned: (state, action) => {
            state.isSigned = action.payload;
        }
    }
});
export const { setIsSigned } = isSignedSlice.actions;
export default isSignedSlice.reducer;