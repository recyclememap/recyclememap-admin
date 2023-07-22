import { AxiosRequestConfig } from 'axios';
import { api } from '@api/network';
import { extractResponse } from '@utils/helpers';
import { Suggestions } from './types';

export const suggestionsApi = {
  getSuggestions: (
    options: AxiosRequestConfig = {}
  ): Promise<Suggestions[]> => {
    return extractResponse(api.get('/markers', options));
  }
};
