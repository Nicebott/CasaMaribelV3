import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Taxi from './components/Taxi.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Taxi />
  </StrictMode>
);
