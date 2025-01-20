import { Character } from '@/pages/character';
import { MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';
import './styles/index.css';

export const App = () => {
  return (
    <div className='app'>
      <MantineProvider defaultColorScheme='dark'>
        <Character />
      </MantineProvider>
    </div>
  );
};
