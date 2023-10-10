import { LatLngExpression, LatLngBoundsExpression } from 'leaflet';

export const ASHDOD_COORDINATES = [31.792, 34.645] as LatLngExpression;
export const ASHDOD_MAX_BOUNDS = [
  [31.75, 34.575],
  [31.85, 34.72]
] as LatLngBoundsExpression;

export const INITIAL_MAP_ZOOM = 13; // Scale 1:13
export const MIN_MAP_ZOOM = 13; // Scale 1:13
export const MAX_MAP_ZOOM = 19; // Scale 1:19

export const MAP_SETUP = {
  center: ASHDOD_COORDINATES,
  maxBounds: ASHDOD_MAX_BOUNDS,
  zoom: INITIAL_MAP_ZOOM,
  minZoom: MIN_MAP_ZOOM
};

export enum StatusCodes {
  Ok = 200,
  BadRequest = 400,
  Unathorized = 401,
  InternalServerError = 500
}
