import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PersDetails from './persDetails.jsx'
import EduDetails from './education.jsx'
import WorkHistory from './work-history.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <PersDetails />
    <EduDetails />
    <WorkHistory />
  </StrictMode>,
)
