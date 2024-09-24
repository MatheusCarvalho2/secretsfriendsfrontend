import produce from 'immer';
import { Reducer } from 'redux';
import { ProfileState, ProfileTypes } from './types'

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


const reducer: Reducer<ProfileState> = (
  state = INITIAL_STATE,
  { type, result },
) => {
  return produce(state, (draft) => {
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

        draft.profile.email = result.data.user.email;
        draft.profile.name = result.data.user.name;

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

export default reducer;