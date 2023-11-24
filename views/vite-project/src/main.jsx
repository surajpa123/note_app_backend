import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from './components/AuthContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>

  <ChakraProvider>
    <AuthProvider>
  
    <App />

    </AuthProvider>
   
  </ChakraProvider>
  </Router>
  </React.StrictMode>,
)
