import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const idDrawSlice = createSlice({
    name: 'id_draw',
    initialState,
    reducers: {
        setIdDraw: (_state, action) => action.payload,
    }
});
export const { setIdDraw } = idDrawSlice.actions;
export default idDrawSlice.reducer;