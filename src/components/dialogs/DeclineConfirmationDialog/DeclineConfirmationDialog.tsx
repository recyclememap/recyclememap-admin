import { LoadingButton } from '@mui/lab';
import {
  Button,
  DialogActions,
  DialogContentText,
  Dialog,
  DialogTitle,
  DialogContent
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useStore } from '@root/store';
import { SuggestionsLoaders } from '@store/domains/Suggestions/constants';

interface DeclineConfirmationDialogProps {
  onClose: () => void;
}

export const DeclineConfirmationDialog = observer(
  ({ onClose }: DeclineConfirmationDialogProps) => {
    const { loader, suggestions } = useStore();

    const declineMarker = async () => {
      try {
        await suggestions.declineMarker();
        await suggestions.setCurrentMarker(null);
        await suggestions.getSuggestedMarkers();

        onClose();
      } catch (e) {}
    };

    return (
      <Dialog open maxWidth="xs">
        <DialogTitle textAlign="center">Decline suggestion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to decline suggestion?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <LoadingButton
            onClick={declineMarker}
            loading={loader.isLoading(SuggestionsLoaders.DeclineMarker)}
            type="submit"
          >
            Decline
          </LoadingButton>
          <Button
            disabled={loader.isLoading(SuggestionsLoaders.DeclineMarker)}
            onClick={() => onClose()}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
);
