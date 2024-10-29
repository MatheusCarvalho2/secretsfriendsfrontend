import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string[] = [];

const presentListSlice = createSlice({
    name: 'presentList',
    initialState,
    reducers: {
        addPresentList: (state, action: PayloadAction<string>) => {
            state.push(action.payload);
        }
    }
});

export const { addPresentList } = presentListSlice.actions;
export default presentListSlice.reducer;