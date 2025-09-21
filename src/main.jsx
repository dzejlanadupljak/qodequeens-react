import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppCas3 from './cas3/AppCas3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppCas3 />
  </StrictMode>,
)
