import type { RequestConfig } from '@/shared/config/api';
import { http } from '@/shared/config/api';

import type { CharacterResponse } from '../../model/types.ts';

interface GetCharactersParams {
  page: number;
}

export type GetCharactersParamsConfig = RequestConfig<GetCharactersParams>;

class CharactersRequests {
  getCharacters = async ({ params, config }: GetCharactersParamsConfig) =>
    await http.get<CharacterResponse>('/character/', {
      params: { ...params },
      ...config
    });
}

export const charactersRequests = new CharactersRequests();
