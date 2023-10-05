import { WasteTypes } from '@store/domains/Suggestions/types';

export const MOCK_SUGGESTED_VALUES = [
  [123, 456],
  [222, 333]
];

export const TEST_MARKER_IDS = ['testId', 'testId2'];

export const MockMarker = [
  {
    id: TEST_MARKER_IDS[0],
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
  },
  {
    id: TEST_MARKER_IDS[1],
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
  }
];
