export type SuggestedPosition = number[];

export enum WasteTypes {
  Packing = 'packing',
  Plastic = 'plastic',
  Batteries = 'batteries',
  Carton = 'carton',
  Clothes = 'clothes',
  Paper = 'paper',
  Glass = 'glass'
}

export enum SuggestionProperties {
  position = 'position',
  wasteTypes = 'wasteTypes',
  address = 'address'
}

export type Marker = {
  id: string;
  date: string;
  [SuggestionProperties.position]: {
    suggestedValue: SuggestedPosition[];
    approvedValue: number[];
  };
  [SuggestionProperties.wasteTypes]: {
    suggestedValue: WasteTypes[][];
    approvedValue: WasteTypes[];
  };
  [SuggestionProperties.address]: {
    suggestedValue: string[];
    approvedValue: string;
  };
};
