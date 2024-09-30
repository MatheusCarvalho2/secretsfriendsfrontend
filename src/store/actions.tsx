/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProfileTypes } from './types';

interface ProfileProps {
  email: string,
  password: string,
  passwordConfirmation: string,
}

export const profileSignOut = () => ({
  types: [ProfileTypes.SHOW_REQUEST, ProfileTypes.SHOW_SUCCESS, ProfileTypes.SHOW_FAILURE],
  promise: (user: any) => user.delete('http://localhost:3000/logout'),
});

export const profileSignIn = ({ email, password, passwordConfirmation }: ProfileProps) => ({
  types: [ProfileTypes.SHOW_REQUEST, ProfileTypes.SHOW_SUCCESS, ProfileTypes.SHOW_FAILURE],
  promise: (user: any) => user.post('http://localhost:3000/signup', { user: { email, password, passwordConfirmation }, }),
});

export default ProfileProps;