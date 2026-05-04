import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import FourWheels from './components/FourWheels.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FourWheels />
  </StrictMode>
);
