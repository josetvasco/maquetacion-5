import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SectionPrincipal from './SectionPrincipal'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <SectionPrincipal/>
  </StrictMode>,
)
