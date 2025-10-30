import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppCas14 from './cas14/AppCas14.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppCas14 />
  </StrictMode>,
)
