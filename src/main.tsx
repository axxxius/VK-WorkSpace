import { createRoot } from 'react-dom/client';

import './app/styles/index.css';

import App from './app/app.tsx';

createRoot(document.getElementById('root')!).render(
  <div className='app'>
    <App />
  </div>
);
