import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string[] = [];

const participantListSlice = createSlice({
    name: 'presentList',
    initialState,
    reducers: {
        addParticipantList: (state, action: PayloadAction<string>) => {
            state.push(action.payload);
        },
        removeParticipant: (state, action: PayloadAction<string>) => {
            return state.filter(email => email !== action.payload);
        }
    }
});

export const { addParticipantList, removeParticipant } = participantListSlice.actions;
export default participantListSlice.reducer;