/* eslint-disable react-refresh/only-export-components */
import { combineReducers, Reducer } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import sessionStorage from 'redux-persist/lib/storage/session';

export default (reducers: Reducer) => {
  const storageReducer = persistReducer(
    {
      key: 'boletimWeb',
      storage,
      whitelist: [
        'profile',
      ],
      version: parseInt(process.env.REACT_APP_STORE_VERSION || '0', 10),
      migrate: (state) => {
        return Promise.resolve(state);
      },
    },
    reducers,
  );

  return combineReducers({ storage: storageReducer });
};
