import { observer } from 'mobx-react-lite';

import { useIntersection } from '@/shared/hooks';
import { Box, Flex, Loader, Title } from '@mantine/core';

import { useGetCharactersQuery } from '../api/hooks/useGetCharactersQuery.ts';
import { characterStore } from '../model/characterStore.ts';

import { CardList } from './cardList/cardLIst.tsx';
import styles from './character.module.css';

export const Character = observer(() => {
  const { refetch, isLoading } = useGetCharactersQuery();

  const cursorRef = useIntersection(() => {
    if (!isLoading) {
      characterStore.increment();
      refetch();
    }
  });

  return (
    <Box maw={1200} mx='auto'>
      <Title mb={20} order={1}>
        Characters
      </Title>
      <Flex>
        <div className={styles.container}>
          <CardList />
          <div ref={cursorRef}></div>
          <Flex align='center' justify='center' h='65vh'>
            {isLoading && <Loader size={30} />}
          </Flex>
        </div>
      </Flex>
    </Box>
  );
});
