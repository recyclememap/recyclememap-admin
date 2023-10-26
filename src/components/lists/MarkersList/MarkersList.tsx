import { Button, List, ListItem } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { Collapse } from '@components/common';
import { Flex } from '@components/containers';
import {
  ApproveConfirmationDialog,
  DeclineConfirmationDialog
} from '@components/dialogs';
import { sizes } from '@root/theme';
import { Marker } from '@store/domains/Suggestions/types';
import { useStore } from '@store/index';
import { SuggestedProperties } from './SuggestedProperties/SuggestedProperties';

export const MarkersList = observer(() => {
  const { suggestions } = useStore();
  const [isApproveDialogOpen, setIsApproveDialogOpen] = useState(false);
  const [isDeclineDialogOpen, setIsDeclineDialogOpen] = useState(false);

  const createNewMarkerCandidate = (
    marker: Marker,
    isApprove: boolean = true
  ) => {
    suggestions.createNewMarkerCandidate(marker, isApprove);

    isApprove ? setIsApproveDialogOpen(true) : setIsDeclineDialogOpen(true);
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
              <Collapse
                isHeader={true}
                title={`Marker id: ${marker.id.slice(-5)}`}
              >
                <SuggestedProperties
                  marker={marker}
                  onApprove={() => setIsApproveDialogOpen(true)}
                  onDecline={() => setIsDeclineDialogOpen(true)}
                />
                {marker.position.approvedValue.length === 0 && (
                  <Flex
                    sx={{
                      justifyContent: 'flex-end',
                      my: sizes[8].rem,
                      gap: sizes[16].rem
                    }}
                  >
                    <Button
                      onClick={() => createNewMarkerCandidate(marker)}
                      variant="contained"
                    >
                      approve
                    </Button>
                    <Button
                      onClick={() => createNewMarkerCandidate(marker, false)}
                      variant="contained"
                      color="error"
                    >
                      decline
                    </Button>
                  </Flex>
                )}
              </Collapse>
            </ListItem>
          ))}
        </List>
      )}
      {isApproveDialogOpen && !!suggestions.markerCandidate && (
        <ApproveConfirmationDialog
          onClose={() => setIsApproveDialogOpen(false)}
        />
      )}
      {isDeclineDialogOpen && !!suggestions.markerCandidate && (
        <DeclineConfirmationDialog
          onClose={() => setIsDeclineDialogOpen(false)}
        />
      )}
    </>
  );
});
