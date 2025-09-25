import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppCas5 from './cas5/AppCas5.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppCas5 />
  </StrictMode>,
)
