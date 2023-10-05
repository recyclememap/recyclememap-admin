import { WasteTypes } from '@store/domains/Suggestions/types';

export const MOCK_SUGGESTED_VALUES = [
  [123, 456],
  [222, 333]
];

export const MockMarker = {
  id: 'testId',
  position: {
    suggestedValue: MOCK_SUGGESTED_VALUES,
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
};

export const getSuggestedValues = () => {
  return MOCK_SUGGESTED_VALUES.map((suggestedValue) => {
    return {
      Lat: `lat: ${suggestedValue[0]}`,
      Long: `long: ${suggestedValue[1]}`
    };
  });
};
