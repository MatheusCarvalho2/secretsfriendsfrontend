import { configureStore } from '@reduxjs/toolkit';
import nameSlice from './reducers/name.tsx'

const store = configureStore({
  reducer: {
    name: nameSlice
  }
});

export default store;