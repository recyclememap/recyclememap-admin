import { AxiosRequestConfig } from 'axios';
import { api } from '@api/network';
import { extractResponse } from '@utils/helpers';
import { Marker, ApprovedMarker } from './types';

export const suggestionsApi = {
  getSuggestedMarkers: (
    options: AxiosRequestConfig = {}
  ): Promise<Marker[]> => {
    return extractResponse(api.get('/markers', options));
  },
  updateMarker: (
    markerId: string,
    body: ApprovedMarker,
    options: AxiosRequestConfig = {}
  ): Promise<void> => {
    return extractResponse(api.patch(`/markers/${markerId}`, body, options));
  },
  deleteMarker: (
    markerId: string,
    options: AxiosRequestConfig = {}
  ): Promise<void> => {
    return extractResponse(api.delete(`/markers/${markerId}`, options));
  }
};
