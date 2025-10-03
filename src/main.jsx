import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppCas7 from './cas7/AppCas7.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppCas7 />
  </StrictMode>,
)
