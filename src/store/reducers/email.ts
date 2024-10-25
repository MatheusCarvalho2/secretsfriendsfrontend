import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const emailSlice = createSlice({
    name: 'email',
    initialState,
    reducers: {
        setEmailStore: (_state, action) => action.payload
    }
});
export const { setEmailStore } = emailSlice.actions;
export default emailSlice.reducer;