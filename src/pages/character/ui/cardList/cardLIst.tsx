import { observer } from 'mobx-react-lite';

import { Box } from '@mantine/core';

import { characterStore } from '../../model/characterStore.ts';
import { EditInfoCardItem } from '../../ui/editInfoCardItem/editInfoCardItem.tsx';
import { CardItem } from '../cardItem/cardItem.tsx';
import styles from '../character.module.css';

export const CardList = observer(() => {
  const { characters } = characterStore;

  return (
    <Box>
      <div className={styles.cards}>
        {characters.map((character) => {
          if (character.id === characterStore.cardId) {
            return <EditInfoCardItem key={character.id} character={character} />;
          }

          return (
            <CardItem
              key={character.id}
              id={character.id}
              name={character.name}
              gender={character.gender}
              image={character.image}
              species={character.species}
              status={character.status}
            />
          );
        })}
      </div>
    </Box>
  );
});
