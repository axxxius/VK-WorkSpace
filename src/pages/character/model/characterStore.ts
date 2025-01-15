import { makeAutoObservable } from 'mobx';

import type { Character } from './types.ts';

class CharacterStore {
  characters: Character[] = [];
  countPage = 0;

  constructor () {
    makeAutoObservable(this);
  }

  setCharacters (characters: Character[]) {
    const ids = new Set(this.characters.map(character => character.id));
    const filteredCharacters = characters.filter(character => !ids.has(character.id));
    this.characters.push(...filteredCharacters);
  }

  increment () {
    return this.countPage++;
  }
}

export const characterStore = new CharacterStore();
