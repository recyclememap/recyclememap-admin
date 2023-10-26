import {
  MarkerProperties,
  WasteTypes,
  MarkerCandidate
} from '@store/domains/Suggestions/types';

const LAT = 123;
const LONG = 456;
const SUGGESTED_LAT = 567;
const SUGGESTED_LONG = 891;
const ADDRESS = 'test address';

export const TextElements = {
  Title: 'Approve marker',
  Description: 'Are you sure you want to approve these properties?',
  ApprovedLabel: 'Approved value:',
  SuggestedLabel: 'Approved value:',
  Lat: `lat: ${LAT}`,
  Long: `long: ${LONG}`,
  SuggestedLat: `lat: ${SUGGESTED_LAT}`,
  SuggesteLong: `long: ${SUGGESTED_LONG}`,
  WasteTypes: WasteTypes.Batteries,
  Address: ADDRESS,
  ErrorMessage: 'Error. Failed to update marker',
  SuccessMessage: 'Success. Marker is updated'
};

export const ButtonElements = {
  Approve: 'Approve',
  Cancel: 'Cancel'
};

export const NEW_MARKER_CANDIDATE: MarkerCandidate = {
  id: 'testId',
  marker: {
    [MarkerProperties.position]: {
      approvedValue: [LAT, LONG]
    },
    [MarkerProperties.wasteTypes]: {
      approvedValue: [WasteTypes.Batteries]
    },
    [MarkerProperties.address]: {
      approvedValue: ADDRESS
    }
  }
};

export const NEW_PROPERTY_CANDIDATE: MarkerCandidate = {
  id: 'testId',
  marker: {
    [MarkerProperties.position]: {
      approvedValue: [LAT, LONG],
      suggestedValue: [[SUGGESTED_LAT, SUGGESTED_LONG]]
    }
  }
};

export const SUGGESTED_MARKERS = [
  {
    id: 'testId',
    [MarkerProperties.position]: {
      suggestedValue: [[SUGGESTED_LAT, SUGGESTED_LONG]],
      approvedValue: [LAT, LONG]
    },
    [MarkerProperties.wasteTypes]: {
      suggestedValue: [],
      approvedValue: [WasteTypes.Batteries]
    },
    [MarkerProperties.address]: {
      suggestedValue: [],
      approvedValue: 'test'
    },
    date: '2023-07-15T21:37:05.406Z'
  }
];
