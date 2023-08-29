import { Collapse, List, ListItem } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { GenericObject } from '@common/types';
import { Flex } from '@components/containers';
import { sizes } from '@root/theme';
import { useStore } from '@store/index';
import { MarkerTitle } from './MarkerTitle/MarkerTitle';
import { SuggestedProperties } from './SuggestedProperties/SuggestedProperties';

export const MarkersList = observer(() => {
  const { suggestions } = useStore();

  const [isSuggestionOpen, setIsSuggestionsOpen] = useState(
    {} as GenericObject
  );

  const expandSuggestions = (id: string) => {
    setIsSuggestionsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <>
      {suggestions.markersList && (
        <List sx={{ width: '100%' }}>
          {suggestions.markersList.map((marker) => (
            <ListItem
              key={marker.id}
              sx={{
                bgcolor: 'background.paper',
                mb: sizes[8].rem,
                borderRadius: sizes[8].rem
              }}
            >
              <Flex sx={{ flexDirection: 'column', flex: 1, minWidth: 0 }}>
                <MarkerTitle
                  markerId={marker.id}
                  isSuggestionOpen={isSuggestionOpen[marker.id]}
                  expandSuggestions={expandSuggestions}
                />
                <Collapse
                  in={isSuggestionOpen[marker.id]}
                  timeout="auto"
                  unmountOnExit
                >
                  <SuggestedProperties marker={marker} />
                </Collapse>
              </Flex>
            </ListItem>
          ))}
        </List>
      )}{' '}
    </>
  );
});
