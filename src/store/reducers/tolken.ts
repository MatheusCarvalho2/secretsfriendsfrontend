import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    tolken: ''
};
const tolkenSlice = createSlice({
    name: 'tolken',
    initialState,
    reducers: {
        setTolken: (state, action) => {
            state.tolken = action.payload;
        }
    }
});
export const { setTolken } = tolkenSlice.actions;
export default tolkenSlice.reducer;