// Dummy function to catch errors

import { AxiosResponse } from 'axios';

// eslint-disable-next-line
export const noop = (): void => {};

export const extractResponse = async (request: Promise<AxiosResponse>) => {
  return await request.then((res) => res.data);
};
