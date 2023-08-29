import { AxiosRequestConfig } from 'axios';
import { api } from '@api/network';
import { extractResponse } from '@utils/helpers';
import { Marker } from './types';

export const suggestionsApi = {
  getSuggestedMarkers: (
    options: AxiosRequestConfig = {}
  ): Promise<Marker[]> => {
    return extractResponse(api.get('/markers', options));
  }
};
