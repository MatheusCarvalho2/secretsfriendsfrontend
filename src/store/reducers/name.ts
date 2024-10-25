import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const nameSlice = createSlice({
    name: 'name',
    initialState,
    reducers: {
        setName: (_state, action) => action.payload,
    }
});
export const { setName } = nameSlice.actions;
export default nameSlice.reducer;