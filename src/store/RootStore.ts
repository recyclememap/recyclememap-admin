import { Loader, Notification, SuggestionsStore } from './domains';

export interface IRootStore {
  suggestions: SuggestionsStore;
  loader: Loader;
  notification: Notification;
}

export class RootStore implements IRootStore {
  suggestions: SuggestionsStore;
  loader: Loader;
  notification: Notification;

  constructor() {
    this.suggestions = new SuggestionsStore(this);
    this.loader = new Loader();
    this.notification = new Notification();
  }
}
