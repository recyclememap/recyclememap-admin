export type SuggestedPosition = number[];

export enum SuggestionProperies {
  position = 'position'
}

export type Marker = {
  id: string;
  date: string;
  [SuggestionProperies.position]: {
    suggestedValue: SuggestedPosition[];
    approvedValue: number[];
  };
};
