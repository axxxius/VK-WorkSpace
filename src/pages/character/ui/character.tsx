import { observer } from 'mobx-react-lite';
import { useState } from 'react';

import { Badge, Button, Card, Flex, Group, Image, Loader, Text } from '@mantine/core';

import { useQuery } from '../../../shared/hooks/http/useQuery.ts';
import { useIntersection } from '../../../shared/hooks/useIntersection.ts';
import { charactersRequests } from '../api/characterRequests.ts';
import { characterStore } from '../model/characterStore.ts';

import styles from './character.module.css';

export const Character = observer(() => {
  useState();
  const { refetch, isLoading } = useQuery(
    () =>
      charactersRequests.getCharacter({
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

  const cursorRef = useIntersection(() => {
    if (!isLoading) {
      characterStore.increment();
      refetch();
    }
  });

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {characterStore.characters.map((el) => (
          <Card key={el.id} w={280} shadow='sm' padding='lg' radius='md' withBorder>
            <Card.Section>
              <Image src={el.image} height={160} alt='Character Image' />
            </Card.Section>

            <Group justify='space-between' mt='md' mb='xs'>
              <Text fw={500}>{el.name}</Text>
              <Badge color='pink'>On Sale</Badge>
            </Group>

            <Text size='sm' c='dimmed'>
              {el.species} - {el.status}
            </Text>

            <Button color='blue' fullWidth mt='md' radius='md'>
              Book classic tour now
            </Button>
          </Card>
        ))}
      </div>
      <div ref={cursorRef}></div>
      <Flex align='center' justify='center'>
        {isLoading && <Loader size={30} />}
      </Flex>
    </div>
  );
});
