import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppCas10 from './cas10/AppCas10.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppCas10 />
  </StrictMode>,
)
