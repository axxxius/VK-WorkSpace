import { createRoot } from 'react-dom/client';

import { App } from '@/app/app.tsx';

import './app/styles/index.css';

createRoot(document.getElementById('root')!).render(
  <div className='app'>
    <App />
  </div>
);
