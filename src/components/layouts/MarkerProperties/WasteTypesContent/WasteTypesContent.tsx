import { Box } from '@mui/material';
import { WasteTypes } from '@store/domains/Suggestions/types';

interface IWasteTypesContent {
  suggestedWasteTypes: WasteTypes[];
}

export const WasteTypesContent = ({
  suggestedWasteTypes
}: IWasteTypesContent) => {
  return <Box>{suggestedWasteTypes.join(', ')}</Box>;
};
