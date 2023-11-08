import { Check, Circle } from '@mui/icons-material';
import { List, ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import { LatLngTuple } from 'leaflet';
import { observer } from 'mobx-react-lite';
import { Collapse } from '@components/common';
import { getProperyContent } from '@components/layouts';
import { useStore } from '@root/store';
import { sizes } from '@root/theme';
import {
  Marker,
  MarkerProperties,
  WasteTypes
} from '@store/domains/Suggestions/types';
import { ProperyActions } from './PropertyActions/PropertyActions';

interface ISuggestedProperties {
  marker: Marker;
  onApprove: () => void;
  onDecline: () => void;
}

export const SuggestedProperties = observer(
  ({ marker, onApprove, onDecline }: ISuggestedProperties) => {
    const { suggestions } = useStore();

    const setCurrentMarker = (
      suggestedMarker: Marker,
      propertyName: MarkerProperties,
      propertyValue: LatLngTuple | WasteTypes[] | string
    ) => {
      suggestions.changeCurrentMarker(
        suggestedMarker,
        propertyName,
        propertyValue
      );
    };

    const createMarkerPropertyToApprove = (
      propertyName: MarkerProperties,
      propertyValue: LatLngTuple | WasteTypes[] | string,
      propertyValueIndx: number,
      isApprove: boolean = true
    ) => {
      suggestions.createMarkerPropertyCandidate(
        marker,
        propertyName,
        propertyValue,
        propertyValueIndx,
        isApprove
      );

      isApprove ? onApprove() : onDecline();
    };

    const isNewMarker = marker.position.approvedValue.length === 0;

    const getListItems = () =>
      Object.entries(marker).map(([suggestedPropertyName, value]) => {
        if (typeof value === 'object' && value.suggestedValue) {
          const { approvedValue, suggestedValue } = value;

          return (
            <ListItem key={marker.id + suggestedPropertyName} disableGutters>
              <Collapse title={suggestedPropertyName}>
                <List disablePadding>
                  {!isNewMarker && (
                    <ListItemButton
                      sx={{
                        '&.MuiListItemButton-root': {
                          pl: 0
                        }
                      }}
                      onClick={() =>
                        setCurrentMarker(
                          marker,
                          suggestedPropertyName as MarkerProperties,
                          approvedValue
                        )
                      }
                    >
                      <ListItemIcon sx={{ minWidth: 0, mr: sizes[8].rem }}>
                        <Check
                          color="primary"
                          sx={{ fontSize: sizes[16].rem }}
                        />
                      </ListItemIcon>
                      {getProperyContent(
                        suggestedPropertyName as MarkerProperties,
                        approvedValue
                      )}
                    </ListItemButton>
                  )}
                  {suggestedValue.map((suggestedValue, idx) => (
                    <ListItem
                      key={marker.id + suggestedPropertyName + suggestedValue}
                      secondaryAction={
                        !isNewMarker && (
                          <ProperyActions
                            createMarkerPropertyToApprove={(isApprove) =>
                              createMarkerPropertyToApprove(
                                suggestedPropertyName as MarkerProperties,
                                suggestedValue,
                                idx,
                                isApprove
                              )
                            }
                          />
                        )
                      }
                      disablePadding
                    >
                      <ListItemButton
                        sx={[
                          !isNewMarker && {
                            '&.MuiListItemButton-root': {
                              pr: '105px',
                              pl: 0
                            }
                          }
                        ]}
                        onClick={() =>
                          setCurrentMarker(
                            marker,
                            suggestedPropertyName as MarkerProperties,
                            suggestedValue
                          )
                        }
                      >
                        <ListItemIcon sx={{ minWidth: 0, mr: sizes[16].rem }}>
                          <Circle sx={{ fontSize: sizes[8].rem }} />
                        </ListItemIcon>
                        {getProperyContent(
                          suggestedPropertyName as MarkerProperties,
                          suggestedValue
                        )}
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </ListItem>
          );
        }
      });

    return <List disablePadding>{getListItems()}</List>;
  }
);
