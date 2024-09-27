/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProfileTypes } from './types';

interface ProfileProps {
  email: string,
  password: string,
  passwordConfirmation: string,
}

export const profileSignOut = () => ({
  types: [ProfileTypes.SHOW_REQUEST, ProfileTypes.SHOW_SUCCESS, ProfileTypes.SHOW_FAILURE],
  promise: (client: any) => client.delete('http://localhost:3000/logout', { body: { new_site: true } }),
});

export const profileSignIn = ({ email, password, passwordConfirmation }: ProfileProps) => ({
  types: [ProfileTypes.SHOW_REQUEST, ProfileTypes.SHOW_SUCCESS, ProfileTypes.SHOW_FAILURE],
  promise: (client: any) => client.post('http://localhost:3000/signup', { user: { email, password, passwordConfirmation }, }),
});
