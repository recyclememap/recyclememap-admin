import { action, makeObservable, observable } from 'mobx';
import { RootStore } from '@store/RootStore';
import { loader, notify } from '@utils/decorators';
import { SuggestionsLoaders } from './constants';
import { suggestionsApi } from './requests';
import { Marker } from './types';

export class SuggestionsStore {
  private rootStore: RootStore;
  markersList: Marker[] | null = null;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeObservable(this, {
      markersList: observable,
      setMarkers: action
    });
  }

  setMarkers(markers: Marker[]): void {
    this.markersList = markers;
  }

  @notify({ message: '500', details: 'Failed to get suggestions' })
  @loader(SuggestionsLoaders.GetSuggestedMarkers)
  async getSuggestedMarkers(): Promise<void> {
    const suggestions = await suggestionsApi.getSuggestedMarkers();

    this.setMarkers(suggestions);
  }
}
