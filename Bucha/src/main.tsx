import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MantineProvider } from '@mantine/core'
import { BrowserRouter } from 'react-router-dom'
declare const baseUrl: string;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter basename={typeof baseUrl === "undefined" ? "/" : baseUrl}>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>,
)
