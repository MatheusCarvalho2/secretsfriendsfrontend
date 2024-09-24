import { ProfileTypes } from './types';

interface ProfileProps {
  login?: string;
  senha?: string;
  refresh?: boolean;
  tabId: string;
}

export const profileSignOut = () => ({
  types: [ProfileTypes.SHOW_REQUEST, ProfileTypes.SHOW_SUCCESS, ProfileTypes.SHOW_FAILURE],
  promise: (client: any) => client.delete('users/logout', { body: { new_site: true } }),
});

export const profileSignIn = ({ login, senha, tabId, refresh = false }: ProfileProps) => ({
  types: [ProfileTypes.SHOW_REQUEST, ProfileTypes.SHOW_SUCCESS, ProfileTypes.SHOW_FAILURE],
  promise: (client: any) => client.post('users/login.json', { login, senha, refresh }),
  rest: refresh,
  tabId,
});
