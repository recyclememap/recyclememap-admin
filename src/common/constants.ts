import { LatLngTuple } from 'leaflet';

export const ASHDOD_COORDINATES = [31.792, 34.645] as LatLngTuple;

export const INITIAL_MAP_ZOOM = 13; // Scale 1:13
export const MAX_MAP_ZOOM = 19; // Scale 1:19

export const MAP_SETUP = {
  center: ASHDOD_COORDINATES,
  zoom: INITIAL_MAP_ZOOM
};

export enum StatusCodes {
  Ok = 200,
  NoContent = 204,
  BadRequest = 400,
  Unathorized = 401,
  InternalServerError = 500
}
