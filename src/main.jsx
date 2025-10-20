import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Configuration AOS optimisée
AOS.init({
  duration: 800,
  easing: 'ease-in-out-cubic',
  once: true,
  mirror: false,
  offset: 50,
  delay: 0,
  anchorPlacement: 'top-bottom'
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)