import { MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';

import { Character } from '../pages/character';

const App = () => {
  return (
    <>
      <MantineProvider>
        <Character />
      </MantineProvider>
    </>
  );
};

export default App;
