import { LatLngTuple } from 'leaflet';
import { action, makeObservable, observable } from 'mobx';
import { RootStore } from '@store/RootStore';
import { loader, notify } from '@utils/decorators';
import { SuggestionsLoaders } from './constants';
import { suggestionsApi } from './requests';
import {
  Marker,
  CurrentMarker,
  MarkerProperties,
  WasteTypes,
  ApprovedMarker,
  MarkerCandidate,
  MarkerCandidateType
} from './types';

export class SuggestionsStore {
  private rootStore: RootStore;
  markersList: Marker[] | null = null;
  currentMarker: CurrentMarker | null = null;
  markerCandidate: MarkerCandidate | null = null;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeObservable(this, {
      markersList: observable,
      currentMarker: observable,
      markerCandidate: observable,
      setMarkerCandidate: action,
      setCurrentMarker: action,
      setMarkers: action
    });
  }

  setMarkers(markers: Marker[]): void {
    this.markersList = markers;
  }

  setCurrentMarker(currentMarker: CurrentMarker | null): void {
    this.currentMarker = currentMarker;
  }

  setMarkerCandidate(markerCandidate: MarkerCandidate): void {
    this.markerCandidate = markerCandidate;
  }

  createNewMarkerCandidate(marker: Marker, isApprove: boolean): void {
    const approvedMarker: MarkerCandidate = {
      id: marker.id
    };

    if (isApprove) {
      approvedMarker.marker = {
        [MarkerProperties.position]: {
          approvedValue: marker.position.suggestedValue[0],
          suggestedValue: []
        },
        [MarkerProperties.wasteTypes]: {
          approvedValue: marker.wasteTypes.suggestedValue[0],
          suggestedValue: []
        },
        [MarkerProperties.address]: {
          approvedValue: marker.address.suggestedValue[0],
          suggestedValue: []
        }
      };
    }

    this.setMarkerCandidate(approvedMarker);
  }

  createMarkerPropertyCandidate(
    marker: Marker,
    propertyName: MarkerProperties,
    propertyValue: LatLngTuple | WasteTypes[] | string,
    propertyValueIndx: number,
    isApprove: boolean
  ): void {
    // suggestedValue is a Union type. Need to use spread operator to avoid type errors
    const suggestedValue = [...marker[propertyName].suggestedValue].filter(
      (_, idx) => idx !== propertyValueIndx
    );
    let approvedMarker: ApprovedMarker;

    if (isApprove) {
      approvedMarker = {
        [MarkerProperties[propertyName]]: {
          approvedValue: propertyValue,
          suggestedValue
        }
      };
    } else {
      approvedMarker = {
        [MarkerProperties[propertyName]]: {
          approvedValue: marker[propertyName].approvedValue,
          suggestedValue
        }
      };
    }

    this.setMarkerCandidate({
      id: marker.id,
      marker: approvedMarker,
      type: MarkerCandidateType.update
    });
  }

  @notify({ message: 'Error', details: 'Failed to get suggestions' })
  @loader(SuggestionsLoaders.GetSuggestedMarkers)
  async getSuggestedMarkers(): Promise<void> {
    const suggestions = await suggestionsApi.getSuggestedMarkers();

    this.setMarkers(suggestions);
  }

  @notify(
    { message: 'Error', details: 'Failed to update marker' },
    { message: 'Success', details: 'Marker is updated' }
  )
  @loader(SuggestionsLoaders.UpdateMarker)
  async updateMarker(): Promise<void> {
    if (this.markerCandidate?.marker) {
      await suggestionsApi.updateMarker(
        this.markerCandidate.id,
        this.markerCandidate.marker
      );
    } else {
      throw new Error();
    }
  }

  @notify(
    { message: 'Error', details: 'Failed to decline' },
    { message: 'Success', details: 'Suggestion is declined' }
  )
  @loader(SuggestionsLoaders.DeclineMarker)
  async declineMarker(): Promise<void> {
    if (this.markerCandidate) {
      this.markerCandidate.type === MarkerCandidateType.update
        ? await this.updateMarker()
        : await suggestionsApi.deleteMarker(this.markerCandidate.id);
    }
  }

  changeCurrentMarker(
    suggestedMarker: Marker,
    propertyName: MarkerProperties,
    propertyValue: LatLngTuple | WasteTypes[] | string
  ): void {
    let currentMarker;

    if (suggestedMarker.position.approvedValue.length === 0) {
      currentMarker = {
        id: suggestedMarker.id,
        date: suggestedMarker.date,
        [MarkerProperties.position]: suggestedMarker.position.suggestedValue[0],
        [MarkerProperties.wasteTypes]:
          suggestedMarker.wasteTypes.suggestedValue[0],
        [MarkerProperties.address]: suggestedMarker.address.suggestedValue[0]
      };
    } else if (this.currentMarker?.id === suggestedMarker.id) {
      currentMarker = {
        ...this.currentMarker,
        [propertyName]: propertyValue
      };
    } else {
      const approvedMarker = {
        id: suggestedMarker.id,
        date: suggestedMarker.date,
        [MarkerProperties.position]: suggestedMarker.position.approvedValue,
        [MarkerProperties.wasteTypes]: suggestedMarker.wasteTypes.approvedValue,
        [MarkerProperties.address]: suggestedMarker.address.approvedValue
      };

      currentMarker = {
        ...approvedMarker,
        [propertyName]: propertyValue
      };
    }

    this.setCurrentMarker(currentMarker);
  }
}
