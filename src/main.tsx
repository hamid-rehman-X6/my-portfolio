import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

/**
 * Styles
 */
import '@/index.css';

/**
 * Components
 */
import { App } from '@/App.tsx';
import Sidebar from '@/components/custom/Sidebar';
import Floatingmenu from '@/components/custom/Floatingmenu';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='min-h-screen lg:flex lg:justify-center lg:items-start lg:gap-10'>
      <Sidebar />
      <Floatingmenu />
      <App />
    </div>
  </StrictMode>,
);
