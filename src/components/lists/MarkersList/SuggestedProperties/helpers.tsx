import {
  SuggestedPosition,
  SuggestionProperties
} from '@store/domains/Suggestions/types';
import { PositionCard } from './PositionCard/PositionCard';

// TODO: Change any to the new suggested value
export const getProperyContent = (
  property: SuggestionProperties,
  suggestedValue: SuggestedPosition | any,
  index: number
) => {
  switch (property) {
    case SuggestionProperties.position:
      return <PositionCard key={index} suggestedPosition={suggestedValue} />;
    default:
      return <></>;
  }
};
