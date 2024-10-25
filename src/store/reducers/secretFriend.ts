import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const secretFriendSlice = createSlice({
    name: 'secretFriend',
    initialState,
    reducers: {
        setSecretFriend: (_state, action) => action.payload
    }
});

export const { setSecretFriend } = secretFriendSlice.actions;
export default secretFriendSlice.reducer;