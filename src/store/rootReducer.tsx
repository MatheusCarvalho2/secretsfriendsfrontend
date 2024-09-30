/* eslint-disable camelcase */
import { AnyAction, CombinedState, combineReducers } from 'redux';

import profile from './profile_store';

import { ProfileState } from './profile_store/types';

const combined = combineReducers({
  profile,
});

const rootReducer = (
  state:
    | CombinedState<{
      profile: ProfileState;
    }>
    | undefined,
  action: AnyAction,
) => {
  if (action.type === 'CLEAR_REDUX') {
    console.log('CLEAR_REDUX');
    state = undefined;
  }

  return combined(state, action);
};

export default rootReducer;
