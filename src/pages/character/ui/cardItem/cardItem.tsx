import { observer } from 'mobx-react-lite';

import { BucketIcon, DotsIcon, PencilIcon } from '@/shared/icons';
import { ActionIcon, Badge, Card, Group, Image, Menu, Text } from '@mantine/core';

import { characterStore } from '../../model/characterStore.ts';

interface CardItemProps {
  id: string;
  name: string;
  image: string;
  species: string;
  status: string;
  gender: string;
  key?: string;
}

export const CardItem = observer((props: CardItemProps) => {
  const { id, name, image, species, status, gender } = props;

  const onEditId = () => {
    characterStore.onEditCardId(id);
  };

  const handleDeleteCard = () => {
    characterStore.onDeleteCard(id);
  };

  return (
    <Card key={id} w={275} shadow='sm' padding='lg' radius='md' withBorder>
      <Card.Section withBorder inheritPadding py='xs'>
        <Group justify='space-between'>
          <Text fw={500}>{name}</Text>
          <Menu withinPortal position='bottom-end' shadow='sm'>
            <Menu.Target>
              <ActionIcon variant='subtle' color='gray'>
                <DotsIcon />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item onClick={onEditId} color='blue' leftSection={<PencilIcon />}>
                Edit card
              </Menu.Item>
              <Menu.Item onClick={handleDeleteCard} color='red' leftSection={<BucketIcon />}>
                Delete card
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Card.Section>
      <Card.Section>
        <Image src={image} height={270} alt='Character Image' />
      </Card.Section>

      <Group justify='space-between' mt='md' mb='xs'>
        {
          {
            Alive: <Badge color='green'>{status}</Badge>,
            Dead: <Badge color='red'>{status}</Badge>,
            unknown: (
              <Badge variant='gradient' gradient={{ from: 'teal', to: 'red', deg: 90 }}>
                {status}
              </Badge>
            )
          }[status]
        }
      </Group>

      <Text size='sm' c='dimmed'>
        {gender} - {species}
      </Text>
    </Card>
  );
});
