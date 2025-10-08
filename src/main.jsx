import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppCas8 from './cas8/AppCas8.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppCas8 />
  </StrictMode>,
)
