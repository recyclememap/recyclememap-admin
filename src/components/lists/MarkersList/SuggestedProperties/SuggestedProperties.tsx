import { List, ListItem, ListItemText } from '@mui/material';
import { Carousel } from '@components/common';
import { Flex } from '@components/containers';
import { sizes } from '@root/theme';
import { Marker, SuggestionProperties } from '@store/domains/Suggestions/types';
import { getProperyContent } from './helpers';

interface ISuggestedProperties {
  marker: Marker;
}

export const SuggestedProperties = ({ marker }: ISuggestedProperties) => {
  return (
    <List disablePadding>
      {Object.entries(marker).map(([suggestedPropertyName, value]) => {
        if (typeof value === 'object' && value.suggestedValue) {
          return (
            <ListItem key={marker.id + suggestedPropertyName}>
              <Flex sx={{ flexDirection: 'column', flex: 1, minWidth: 0 }}>
                {/* TODO: Show here approved value */}
                <ListItemText
                  primary={suggestedPropertyName}
                  sx={{
                    paddingLeft: sizes[8].px
                  }}
                />
                <Carousel>
                  {value.suggestedValue.map((suggestedValue, index) =>
                    getProperyContent(
                      suggestedPropertyName as SuggestionProperties,
                      suggestedValue,
                      index
                    )
                  )}
                </Carousel>
              </Flex>
            </ListItem>
          );
        }
      })}
    </List>
  );
};
