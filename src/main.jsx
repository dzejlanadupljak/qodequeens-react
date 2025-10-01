import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppCas6 from './cas6/AppCas6.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppCas6 />
  </StrictMode>,
)
