import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    secretFriend: ''
};
const secretFriendSlice = createSlice({
    name: 'secretFriend',
    initialState,
    reducers: {
        setSecretFriend: (state, action) => {
            state.secretFriend = action.payload;
        }
    }
});
export const { setSecretFriend } = secretFriendSlice.actions;
export default secretFriendSlice.reducer;