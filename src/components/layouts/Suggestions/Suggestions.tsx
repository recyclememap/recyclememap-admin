import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { LoadingContainer } from '@components/containers';
import { MarkersList } from '@root/components/lists';
import { useStore } from '@root/store';
import { SuggestionsLoaders } from '@store/domains/Suggestions/constants';
import { noop } from '@utils/helpers';

export const Suggestions = observer(() => {
  const { suggestions, loader } = useStore();

  useEffect(() => {
    suggestions.getSuggestedMarkers().catch(noop);
  }, [suggestions]);

  return (
    <LoadingContainer
      isLoading={loader.isLoading(SuggestionsLoaders.GetSuggestedMarkers)}
    >
      <MarkersList />
    </LoadingContainer>
  );
});
