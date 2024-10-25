import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import nameSlice from './reducers/name.ts';
import emailSlice from './reducers/email.ts';
import isSignedSlice from './reducers/isSigned.ts';
import tokenSlice from './reducers/token.ts';
import presentListSlice from './reducers/presentsList.ts';
import secretFriendSlice from './reducers/secretFriend.ts';
import storage from 'redux-persist/es/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    name: nameSlice,
    email: emailSlice,
    isSigned: isSignedSlice,
    token: tokenSlice,
    presents_list: presentListSlice,
    secret_friend: secretFriendSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export default store;
