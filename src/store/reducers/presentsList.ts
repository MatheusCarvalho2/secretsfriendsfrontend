import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    presentList: []
};
const presentListSlice = createSlice({
    name: 'presentList',
    initialState,
    reducers: {
        setPresentList: (state, action) => {
            state.presentList = action.payload;
        }
    }
});
export const { setPresentList } = presentListSlice.actions;
export default presentListSlice.reducer;