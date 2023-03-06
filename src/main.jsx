import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import 'virtual:windi.css'
import './index.css'
import App from './App'

const container = document.getElementById('root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(
  <Router>
    <App />
  </Router>
)
