import {
  Marker,
  MarkerCandidateType,
  MarkerProperties,
  WasteTypes
} from '@store/domains/Suggestions/types';

const LAT = 123;
const LONG = 456;
const ADDRESS = 'test address';
const APPROVED_ADDRESS = 'approved address';

export const NEW_SUGGESTED_MARKERS: Marker = {
  id: 'testId',
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

export const SUGGESTED_MARKERS: Marker = {
  id: 'testId',
  [MarkerProperties.position]: {
    suggestedValue: [],
    approvedValue: [LAT, LONG]
  },
  [MarkerProperties.wasteTypes]: {
    suggestedValue: [],
    approvedValue: [WasteTypes.Carton]
  },
  [MarkerProperties.address]: {
    suggestedValue: [ADDRESS],
    approvedValue: APPROVED_ADDRESS
  },
  date: '2023-07-15T21:37:05.406Z'
};

export const TextElements = {
  Lat: `lat: ${LAT}`,
  Long: `long: ${LONG}`,
  WasteTypes: WasteTypes.Batteries,
  Address: ADDRESS
};

export const CURRENT_NEW_MARKER = {
  id: NEW_SUGGESTED_MARKERS.id,
  date: NEW_SUGGESTED_MARKERS.date,
  [MarkerProperties.position]: NEW_SUGGESTED_MARKERS.position.suggestedValue[0],
  [MarkerProperties.wasteTypes]:
    NEW_SUGGESTED_MARKERS.wasteTypes.suggestedValue[0],
  [MarkerProperties.address]: NEW_SUGGESTED_MARKERS.address.suggestedValue[0]
};

export const CURRENT_SUGGESTED_MARKER = {
  id: SUGGESTED_MARKERS.id,
  date: SUGGESTED_MARKERS.date,
  [MarkerProperties.position]: SUGGESTED_MARKERS.position.suggestedValue[0],
  [MarkerProperties.wasteTypes]: SUGGESTED_MARKERS.wasteTypes.suggestedValue[0],
  [MarkerProperties.address]: 'test'
};

export const NEW_PROPERTY_CANDIDATE = {
  id: 'testId',
  marker: {
    [MarkerProperties.address]: {
      approvedValue: ADDRESS,
      suggestedValue: []
    }
  },
  type: MarkerCandidateType.update
};

export const DECLINE_PROPERTY_CANDIDATE = {
  id: 'testId',
  marker: {
    [MarkerProperties.address]: {
      suggestedValue: []
    }
  },
  type: MarkerCandidateType.update
};

export const ButtonElements = {
  Approve: 'approve value',
  Decline: 'decline value'
};
