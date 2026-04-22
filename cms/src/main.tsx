import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/global.css';
import RouterConfig from './config/RouterConfig';
import { Toaster } from 'sonner';
import AuthProvider from './lib/provider/AuthProvider';
// component
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <Toaster richColors closeButton/>
      <RouterConfig />
    </AuthProvider>
    
  </StrictMode>
);


