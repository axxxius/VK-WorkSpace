import { makeAutoObservable } from 'mobx';
import { nanoid } from 'nanoid';

import type { Character } from './types.ts';

class CharacterStore {
  characters: Character[] = [];
  countPage: number = 1;
  cardId: Character['id'] | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setCharacters(newCharacters: Omit<Character, 'id'>[]) {
    this.characters = [
      ...this.characters,
      ...newCharacters.map((character) => ({
        ...character,
        id: nanoid()
      }))
    ];
  }

  onEditCardId(id: Character['id'] | null) {
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
