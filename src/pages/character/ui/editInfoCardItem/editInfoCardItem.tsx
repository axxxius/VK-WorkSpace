import { observer } from 'mobx-react-lite';

import { useForm } from '@/shared/hooks';
import { Button, Card, Flex, TextInput } from '@mantine/core';

import { characterStore } from '../../model/characterStore.ts';
import type { Character } from '../../model/types.ts';

interface EditInfoCardItemProps {
  character: Character;
}

export const EditInfoCardItem = observer(({ character }: EditInfoCardItemProps) => {
  const { field, onChange } = useForm({
    initialValue: {
      name: character.name,
      gender: character.gender,
      species: character.species
    }
  });

  const onClick = () => {
    characterStore.onEditCard({
      name: field.name,
      gender: field.gender,
      species: field.species
    });

    characterStore.onEditCardId(null);
  };

  const onEditId = () => {
    characterStore.onEditCardId(null);
  };

  return (
    <Card key={character.id} w={275} shadow='sm' padding='lg' radius='md' withBorder>
      <Flex direction='column' gap={20}>
        <TextInput
          value={field.name}
          name='name'
          onChange={onChange}
          placeholder='Name'
          label='Name'
        />
        <TextInput
          value={field.gender}
          name='gender'
          onChange={onChange}
          placeholder='Gender'
          label='Gender'
        />
        <TextInput
          value={field.species}
          name='species'
          onChange={onChange}
          placeholder='Species'
          label='Species'
        />
        <Flex mt={60} w='100%' gap={20}>
          <Button fullWidth onClick={onClick}>
            Save
          </Button>
          <Button fullWidth onClick={onEditId}>
            Cancel
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
});
