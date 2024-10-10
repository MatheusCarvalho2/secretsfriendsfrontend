/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers } from '@reduxjs/toolkit';
import profile from './profile';

const combined = combineReducers({ profile });

const rootReducer = (state: any, action: any) => {
  return combined(state, action);
};

export default rootReducer;


// import combineReducers from '@reduxjs/toolkit';

// import profile from './profile';

// import { ProfileState } from './profile/types';
// import { CombinedState } from '@reduxjs/toolkit/query/react';

// console.log(profile);

// const combined = combineReducers({ profile });

// const rootReducer = (
//   state:
//     | CombinedState<{
//       profile: ProfileState;
//     }>
//     | undefined,
//   action: any,
// ) => {
//   return combined(state, action);
// };

// export default rootReducer;
