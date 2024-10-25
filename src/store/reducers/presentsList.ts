import { createSlice } from '@reduxjs/toolkit';

const initialState: string[] = [];

const presentListSlice = createSlice({
    name: 'presentList',
    initialState,
    reducers: {
        setPresentList: (_state, action) => action.payload
    }
});

export const { setPresentList } = presentListSlice.actions;
export default presentListSlice.reducer;