import { patchPromise } from 'services/requests/request';

type IUpdateUserData = {
  firstname: string;
  lastname: string;
  email: string;
};
export function updateUser(data: IUpdateUserData) {
  return patchPromise('/profile', data);
}
