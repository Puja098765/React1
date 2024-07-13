import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//create root creates a dom like structure behind the scene and  it compare main dom and itslef dom and update only those which update actually  on ui and in browser whole dom  update by removing previous dom thats called  page reload  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
