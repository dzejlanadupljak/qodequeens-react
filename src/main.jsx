import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppCas9 from './cas9/AppCas9.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppCas9 />
  </StrictMode>,
)
