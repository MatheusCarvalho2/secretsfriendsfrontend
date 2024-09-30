export enum ProfileTypes {
  SHOW_REQUEST = 'SHOW_REQUEST',
  SHOW_SUCCESS = 'SHOW_SUCCESS',
  SHOW_FAILURE = 'SHOW_FAILURE',
}

export interface ProfileState {
  profile: {
    name: string,
    email: string,
    isSigned: boolean,
    jwt: string,
    presents_list: Array<string>,
    secret_friend: string,
  },
  request: {
    loading: boolean,
    loaded: boolean,
    error: boolean,
  },
}
