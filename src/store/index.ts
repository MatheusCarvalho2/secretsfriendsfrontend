import { configureStore } from '@reduxjs/toolkit';
import nameSlice from './reducers/name.ts';
import emailSlice from './reducers/email.ts';
import isSigned from './reducers/isSigned.ts';
import tolkenSlice from './reducers/tolken.ts';
import presentListSlice from './reducers/presentsList.ts';
import secretFriendSlice from './reducers/secretFriend.ts';

const store = configureStore({
    reducer: {
        name: nameSlice,
        email: emailSlice,
        isSigned: isSigned,
        tolken: tolkenSlice,
        presents_list: presentListSlice,
        secret_friend: secretFriendSlice,
    }
});
export default store;
