import { AxiosResponse } from 'axios';

// Dummy function to catch errors
export const noop = (): void => {};

export const extractResponse = async (request: Promise<AxiosResponse>) => {
  return await request.then((res) => res.data);
};
