import { http } from '../../../shared/config/api/instance.ts';
import type { RequestConfig } from '../../../shared/config/api/requestConfig.ts';
import type { CharacterResponse } from '../model/types.ts';

interface GetCharacterParams {
  page: number;
}

export type GetCharacterParamsConfig = RequestConfig<GetCharacterParams>;

class CharactersRequests {
  getCharacter = async ({ params, config }: GetCharacterParamsConfig) =>
    await http.get<CharacterResponse>('/character/', {
      params: { ...params },
      ...config
    });
}

export const charactersRequests = new CharactersRequests();
