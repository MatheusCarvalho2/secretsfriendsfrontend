import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const idUserSlice = createSlice({
    name: 'idUser',
    initialState,
    reducers: {
        setIdUser: (_state, action) => action.payload,
    }
});
export const { setIdUser } = idUserSlice.actions;
export default idUserSlice.reducer;