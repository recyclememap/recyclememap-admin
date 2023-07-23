import { action, makeObservable, observable } from 'mobx';
import { RootStore } from '@store/RootStore';
import { loader, notify } from '@utils/decorators';
import { SuggestionsLoaders } from './constants';
import { suggestionsApi } from './requests';
import { Suggestions } from './types';

export class SuggestionsStore {
  private rootStore: RootStore;
  suggestionsList: Suggestions[] | null = null;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeObservable(this, {
      suggestionsList: observable,
      setSuggestions: action
    });
  }

  setSuggestions(suggestions: Suggestions[]): void {
    this.suggestionsList = suggestions;
  }

  @notify({ message: '500', details: 'Failed to get suggestions' })
  @loader(SuggestionsLoaders.GetSuggestions)
  async getSuggestions(): Promise<void> {
    const suggestions = await suggestionsApi.getSuggestions();

    this.setSuggestions(suggestions);
  }
}
