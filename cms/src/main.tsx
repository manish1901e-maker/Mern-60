import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/global.css';
import RouterConfig from './config/RouterConfig';
import { Toaster } from 'sonner';
// component
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster richColors closeButton/>
    <RouterConfig />
    
  </StrictMode>
);


