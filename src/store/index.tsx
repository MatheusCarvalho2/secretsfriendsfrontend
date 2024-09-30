/* eslint-disable @typescript-eslint/no-explicit-any */
import { produce } from 'immer';
import { Store, Reducer } from 'redux';
import { ProfileState, ProfileTypes } from './types'
import { configureStore } from '@reduxjs/toolkit';
import persistReducer from './persistReducer';
import rootReducer from './rootReducer';

const INITIAL_STATE: ProfileState = {
  profile: {
    name: '',
    email: '',
    isSigned: false,
    jwt: '',
    presents_list: [],
    secret_friend: '',
  },
  request: {
    loading: false,
    loaded: false,
    error: false,
  },
};


export interface ApplicationState {
  state: any;
  storage: {
    profile: ProfileState;
  }
}

const reducer: Reducer<ProfileState> = (
  state = INITIAL_STATE,
  { type, result },
) => {
  return produce(state, (draft: { profile: { email: string; name: string; isSigned?: boolean; jwt?: string; presents_list?: string[]; secret_friend?: string; }; request: { loading: boolean; loaded: boolean; error: boolean; }; }) => {
    switch (type) {
      case ProfileTypes.SHOW_REQUEST:
        draft.profile = INITIAL_STATE.profile;
        draft.request = {
          loading: true,
          loaded: false,
          error: false,
        };
        break;

      case ProfileTypes.SHOW_SUCCESS:
        if (!result) return;
        draft.profile.name = result.data.user.name;
        draft.profile.email = result.data.user.email;
        draft.profile.isSigned = result.data.user.isSigned;
        draft.profile.jwt = result.data.user.jwt;
        draft.profile.presents_list = result.data.user.presents_list;
        draft.profile.secret_friend = result.data.user.secret_friend;
        break;

      case ProfileTypes.SHOW_FAILURE:
        draft.profile = INITIAL_STATE.profile;
        draft.request = {
          loading: false,
          loaded: false,
          error: true,
        };
        break;

      default:
        break;
    }
  });
};

const store: Store<ApplicationState> = configureStore(persistReducer(rootReducer));

export default { store, reducer };