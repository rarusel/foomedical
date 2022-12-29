import { MedplumClient } from '@medplum/core';
import { MedplumProvider } from '@medplum/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './index.css';

const medplum = new MedplumClient({
  baseUrl: import.meta.env.MEDPLUM_SERVER_BASEURL,
  clientId: import.meta.env.MEDPLUM_CLIENT_ID,
  onUnauthenticated: () => (window.location.href = '/'),
});

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <MedplumProvider medplum={medplum}>
        <App />
      </MedplumProvider>
    </BrowserRouter>
  </StrictMode>
);
