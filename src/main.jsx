import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'  // adds css to base of app
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
