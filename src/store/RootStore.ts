import { Auth, Loader, Notification, SuggestionsStore } from './domains';

export interface IRootStore {
  suggestions: SuggestionsStore;
  loader: Loader;
  notification: Notification;
  auth: Auth;
}

export class RootStore implements IRootStore {
  suggestions: SuggestionsStore;
  loader: Loader;
  notification: Notification;
  auth: Auth;

  constructor() {
    this.suggestions = new SuggestionsStore(this);
    this.loader = new Loader();
    this.notification = new Notification();
    this.auth = new Auth();
  }
}
