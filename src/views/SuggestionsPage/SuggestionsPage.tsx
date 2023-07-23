import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { LoadingContainer } from '@components/containers';
import { useStore } from '@store/Context';
import { SuggestionsLoaders } from '@store/domains/Suggestions/constants';
import { noop } from '@utils/helpers';

const SuggestionsPage = observer(() => {
  const { suggestions, loader } = useStore();

  useEffect(() => {
    suggestions.getSuggestions().catch(noop);
  }, [suggestions]);

  return (
    <LoadingContainer
      isLoading={loader.isLoading(SuggestionsLoaders.GetSuggestions)}
    >
      <>
        {suggestions.suggestionsList?.map((suggestion) => (
          <div key={suggestion.id}>{suggestion.position}</div>
        ))}
      </>
    </LoadingContainer>
  );
});

export default SuggestionsPage;
