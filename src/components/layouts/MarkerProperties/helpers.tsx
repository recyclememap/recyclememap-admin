import { LatLngTuple } from 'leaflet';
import { MarkerProperties, WasteTypes } from '@store/domains/Suggestions/types';
import { PositionContent } from './PositionContent/PositionContent';
import { WasteTypesContent } from './WasteTypesContent/WasteTypesContent';

export type ProperiesValue = string | LatLngTuple | WasteTypes[];

export const getProperyContent = (
  property: MarkerProperties,
  suggestedValue: ProperiesValue
) => {
  switch (property) {
    case MarkerProperties.position:
      return (
        <PositionContent suggestedPosition={suggestedValue as LatLngTuple} />
      );
    case MarkerProperties.wasteTypes:
      return (
        <WasteTypesContent
          suggestedWasteTypes={suggestedValue as WasteTypes[]}
        />
      );
    default:
      return suggestedValue;
  }
};
