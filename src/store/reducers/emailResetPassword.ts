import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const emailResetPasswordSlice = createSlice({
    name: 'email',
    initialState,
    reducers: {
        setEmailResetPasswordStore: (_state, action) => action.payload
    }
});
export const { setEmailResetPasswordStore } = emailResetPasswordSlice.actions;
export default emailResetPasswordSlice.reducer;