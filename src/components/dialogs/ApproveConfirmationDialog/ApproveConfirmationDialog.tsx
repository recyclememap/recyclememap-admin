import { LoadingButton } from '@mui/lab';
import {
  Button,
  DialogActions,
  DialogContentText,
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItemText
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useStore } from '@root/store';
import { SuggestionsLoaders } from '@store/domains/Suggestions/constants';
import { MarkerProperties } from '@store/domains/Suggestions/types';
import { ConfirmationDialogContent } from './ConfirmationDialogContent/ConfirmationDialogContent';

interface ApproveConfirmationDialogProps {
  onClose: () => void;
}

export const ApproveConfirmationDialog = observer(
  ({ onClose }: ApproveConfirmationDialogProps) => {
    const { loader, suggestions } = useStore();

    const approveMarker = async () => {
      try {
        await suggestions.updateMarker();
        await suggestions.setCurrentMarker(null);
        await suggestions.getSuggestedMarkers();

        onClose();
      } catch (e) {}
    };

    const getContent = () => {
      const marker = suggestions.markerCandidate?.marker;

      return (
        marker &&
        Object.keys(marker).map((property, idx) => {
          const approvedValue =
            marker[property as MarkerProperties]?.approvedValue;

          const suggestedValue =
            marker[property as MarkerProperties]?.suggestedValue;

          return (
            <List key={property + idx}>
              <ListItemText
                primary={property}
                primaryTypographyProps={{
                  variant: 'h6'
                }}
              />
              {approvedValue && (
                <List>
                  <ListItemText primary="Approved value:" />
                  <ConfirmationDialogContent
                    property={property as MarkerProperties}
                    content={approvedValue}
                  />
                </List>
              )}

              {suggestedValue && suggestedValue.length > 0 && (
                <>
                  <ListItemText primary="Suggested values:" />
                  {suggestedValue.map((value, idx) => (
                    <ConfirmationDialogContent
                      key={idx}
                      property={property as MarkerProperties}
                      content={value}
                    />
                  ))}
                </>
              )}
            </List>
          );
        })
      );
    };

    return (
      <Dialog open maxWidth="xs">
        <DialogTitle textAlign="center">Approve marker</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to approve these properties?
          </DialogContentText>
          {getContent()}
        </DialogContent>
        <DialogActions>
          <LoadingButton
            onClick={approveMarker}
            loading={loader.isLoading(SuggestionsLoaders.UpdateMarker)}
            type="submit"
          >
            Approve
          </LoadingButton>
          <Button
            disabled={loader.isLoading(SuggestionsLoaders.UpdateMarker)}
            onClick={() => onClose()}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
);
