import { configureStore } from '@reduxjs/toolkit';
import nameSlice from './reducers/name.ts';
import emailSlice from './reducers/email.ts';
import isSigned from './reducers/isSigned.ts';
import tokenSlice from './reducers/token.ts';
import presentListSlice from './reducers/presentsList.ts';
import secretFriendSlice from './reducers/secretFriend.ts';

const store = configureStore({
    reducer: {
        name: nameSlice,
        email: emailSlice,
        isSigned: isSigned,
        tolken: tokenSlice,
        presents_list: presentListSlice,
        secret_friend: secretFriendSlice,
    }
});
export default store;
