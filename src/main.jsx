import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react';
import './index.css'
import App from './App.jsx'
import { MovieProvider } from './context/MovieContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <MovieProvider>
        <App />
      </MovieProvider>
    </ChakraProvider>
  </StrictMode>,
);