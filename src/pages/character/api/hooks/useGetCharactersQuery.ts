import { useQuery } from '@/shared/hooks';

import { charactersRequests } from '../../api/requests/characterRequests';
import { characterStore } from '../../model/characterStore';

export const useGetCharactersQuery = () =>
  useQuery(
    () =>
      charactersRequests.getCharacters({
        params: {
          page: characterStore.countPage
        }
      }),
    {
      onSuccess: (response) => {
        characterStore.setCharacters(response.data.results);
      }
    }
  );
