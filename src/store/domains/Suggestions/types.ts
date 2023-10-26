import { LatLngTuple } from 'leaflet';
import { MakePartial } from '@common/types';

export enum WasteTypes {
  Packing = 'packing',
  Plastic = 'plastic',
  Batteries = 'batteries',
  Carton = 'carton',
  Clothes = 'clothes',
  Paper = 'paper',
  Glass = 'glass'
}

export enum MarkerProperties {
  position = 'position',
  wasteTypes = 'wasteTypes',
  address = 'address'
}

type PropertyType<S, A> = {
  suggestedValue: S;
  approvedValue: A;
};

type PositionType = PropertyType<LatLngTuple[], LatLngTuple | []>;
type WateTypesType = PropertyType<WasteTypes[][], WasteTypes[]>;
type AddressType = PropertyType<string[], string>;

export type Marker = {
  id: string;
  date: string;
  [MarkerProperties.position]: PositionType;
  [MarkerProperties.wasteTypes]: WateTypesType;
  [MarkerProperties.address]: AddressType;
};

export type CurrentMarker = {
  id: string;
  date: string;
  [MarkerProperties.position]: LatLngTuple;
  [MarkerProperties.wasteTypes]: WasteTypes[];
  [MarkerProperties.address]: string;
};

export type ApprovedMarker = MakePartial<{
  [MarkerProperties.position]: PositionType;
  [MarkerProperties.wasteTypes]: WateTypesType;
  [MarkerProperties.address]: AddressType;
}>;

export enum MarkerCandidateType {
  newMarker = 'newMarker',
  update = 'update'
}

export type MarkerCandidate = {
  id: string;
  marker?: ApprovedMarker;
  type?: MarkerCandidateType;
};
