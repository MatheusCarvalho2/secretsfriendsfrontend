/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { combineReducers, Reducer } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default (reducers: Reducer) => {
  const storageReducer = persistReducer(
    {
      storage,
      whitelist: [
        'profile',
      ],
      migrate: (state: any) => {
        return Promise.resolve(state);
      },
      key: ''
    },
    reducers,
  );

  return combineReducers({ storage: storageReducer });
};
