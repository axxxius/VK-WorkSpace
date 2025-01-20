import { makeAutoObservable } from 'mobx';

import type { Character } from './types.ts';

class CharacterStore {
  characters: Character[] = [];
  countPage = 0;
  cardId: number | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setCharacters(newCharacters: Character[]) {
    this.characters = [...this.characters, ...newCharacters];
  }

  onEditCardId(id: number | null) {
    this.cardId = id;
  }

  onEditCard({ name, gender, species }: Pick<Character, 'name' | 'gender' | 'species'>) {
    this.characters = this.characters.map((character) => {
      if (character.id === this.cardId) {
        return {
          ...character,
          name,
          gender,
          species
        };
      }

      return character;
    });
  }

  onDeleteCard(id: Character['id']) {
    this.characters = this.characters.filter((character) => character.id !== id);
  }

  increment() {
    return this.countPage++;
  }
}

export const characterStore = new CharacterStore();
