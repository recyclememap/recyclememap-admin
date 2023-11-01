import { LatLngTuple } from 'leaflet';
import {
  Marker,
  MarkerProperties,
  WasteTypes
} from '@store/domains/Suggestions/types';

export const SUGGESTED_POSITION: LatLngTuple[] = [
  [123, 456],
  [222, 333]
];

const LAT = 123;
const LONG = 456;
const ADDRESS = 'test address';

export const TEST_MARKER_IDS = ['testId12345', 'testId56789'];

export const SUGGESTED_MARKERS: Marker[] = [
  {
    id: TEST_MARKER_IDS[0],
    position: {
      suggestedValue: SUGGESTED_POSITION,
      approvedValue: []
    },
    wasteTypes: {
      suggestedValue: [],
      approvedValue: [WasteTypes.Batteries]
    },
    address: {
      suggestedValue: [],
      approvedValue: 'test'
    },
    date: '2023-07-15T21:37:05.406Z'
  },
  {
    id: TEST_MARKER_IDS[1],
    position: {
      suggestedValue: SUGGESTED_POSITION,
      approvedValue: []
    },
    wasteTypes: {
      suggestedValue: [],
      approvedValue: [WasteTypes.Batteries]
    },
    address: {
      suggestedValue: [],
      approvedValue: 'test'
    },
    date: '2023-07-15T21:37:05.406Z'
  }
];

export const NEW_SUGGESTED_MARKERS: Marker = {
  id: TEST_MARKER_IDS[0],
  [MarkerProperties.position]: {
    suggestedValue: [[LAT, LONG]],
    approvedValue: []
  },
  [MarkerProperties.wasteTypes]: {
    suggestedValue: [[WasteTypes.Batteries]],
    approvedValue: []
  },
  [MarkerProperties.address]: {
    suggestedValue: [ADDRESS],
    approvedValue: ''
  },
  date: '2023-07-15T21:37:05.406Z'
};

export const NEW_MARKER_CANDIDATE = {
  id: NEW_SUGGESTED_MARKERS.id,
  marker: {
    [MarkerProperties.position]: {
      approvedValue: NEW_SUGGESTED_MARKERS.position.suggestedValue[0],
      suggestedValue: []
    },
    [MarkerProperties.wasteTypes]: {
      approvedValue: NEW_SUGGESTED_MARKERS.wasteTypes.suggestedValue[0],
      suggestedValue: []
    },
    [MarkerProperties.address]: {
      approvedValue: NEW_SUGGESTED_MARKERS.address.suggestedValue[0],
      suggestedValue: []
    }
  }
};

export const ButtonElements = {
  Approve: 'approve',
  Decline: 'decline'
};

export const TextElements = {
  MarkerHeader1: 'Marker id: 12345',
  MarkerHeader2: 'Marker id: 56789',
  ApproveDialogTitle: 'Approve marker',
  DeclineDialogTitle: 'Decline suggestion'
};
