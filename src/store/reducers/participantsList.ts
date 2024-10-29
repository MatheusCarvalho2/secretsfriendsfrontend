import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string[] = [];

const participantListSlice = createSlice({
    name: 'presentList',
    initialState,
    reducers: {
        addParticipantList: (state, action: PayloadAction<string>) => {
            state.push(action.payload);
        }
    }
});

export const { addParticipantList } = participantListSlice.actions;
export default participantListSlice.reducer;