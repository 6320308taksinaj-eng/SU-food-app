import React from 'react'
import ReactDOM from 'react-dom/client' // <-- ต้องสะกดแบบนี้
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom' // <-- สัปดาห์ก่อนที่แก้ไป

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)