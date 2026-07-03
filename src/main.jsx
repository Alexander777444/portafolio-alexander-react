import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/base.css'
import './styles/navigation.css'
import './styles/hero.css'
import './styles/components.css'
import './styles/sections.css'
import './components/Footer.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)