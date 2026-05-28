import react from 'react'
import RootDom from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BroeserRouter} from 'react-router-dom'

ReatcDom.creaateRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

)
