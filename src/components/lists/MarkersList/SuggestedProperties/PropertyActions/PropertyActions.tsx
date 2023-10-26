import { CheckCircle, Cancel } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Flex } from '@components/containers';
import { sizes } from '@root/theme';

interface ProperyActionsProps {
  createMarkerPropertyToApprove: (isApprove: boolean) => void;
}

export const ProperyActions = ({
  createMarkerPropertyToApprove
}: ProperyActionsProps) => {
  return (
    <Flex sx={{ gap: sizes[4].rem }}>
      <IconButton
        title="approve value"
        onClick={() => createMarkerPropertyToApprove(true)}
      >
        <CheckCircle color="success" />
      </IconButton>
      <IconButton
        title="decline value"
        onClick={() => createMarkerPropertyToApprove(false)}
      >
        <Cancel color="warning" />
      </IconButton>
    </Flex>
  );
};
