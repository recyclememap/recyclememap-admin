import {
  MarkerProperties,
  WasteTypes,
  MarkerCandidate,
  MarkerCandidateType
} from '@store/domains/Suggestions/types';

const LAT = 123;
const LONG = 456;
const SUGGESTED_LAT = 567;
const SUGGESTED_LONG = 891;
const ADDRESS = 'test address';

export const TextElements = {
  Title: 'Decline suggestion',
  Description: 'Are you sure you want to decline suggestion?',
  ErrorMessage: 'Error. Failed to decline',
  SuccessMessage: 'Success. Suggestion is declined'
};

export const ButtonElements = {
  Decline: 'Decline',
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
  },
  type: MarkerCandidateType.update
};

export const SUGGESTED_MARKERS = [
  {
    id: 'testId',
    [MarkerProperties.position]: {
      suggestedValue: [],
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
