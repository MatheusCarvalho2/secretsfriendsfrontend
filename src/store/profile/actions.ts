/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProfileTypes } from './types';

interface ProfileProps {
  email: string,
  password: string,
}

export const profileSignOut = () => ({
  type: ProfileTypes.SHOW_REQUEST,
  types: [ProfileTypes.SHOW_REQUEST, ProfileTypes.SHOW_SUCCESS, ProfileTypes.SHOW_FAILURE],
  promise: (client: any) => client.delete('http://localhost:3000/logout'),
});

export const profileSignIn = ({ email, password }: ProfileProps) => ({
  type: ProfileTypes.SHOW_REQUEST,
  types: [ProfileTypes.SHOW_REQUEST, ProfileTypes.SHOW_SUCCESS, ProfileTypes.SHOW_FAILURE],
  promise: (client: any) => client.post('http://localhost:3000/login', { user: { email, password }, }),
});

export default ProfileProps;