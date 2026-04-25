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
import Profile from '@/components/custom/Profile';
import './bones/registry';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='min-h-screen lg:flex lg:justify-center lg:items-start lg:gap-10'>
      <Sidebar />
      <Floatingmenu />
      <Profile />
      <App />
    </div>
  </StrictMode>,
);
