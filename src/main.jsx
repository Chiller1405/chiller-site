import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { loadAnalyticsIfConsented } from './consent'

// Analytics (Microsoft Clarity) loads only after explicit consent — see src/consent.js.
loadAnalyticsIfConsented()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
