import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/AuthContext/index.jsx'
import { Toaster } from './components/ui/toaster.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthProvider>
    <App />
  </AuthProvider>
  <Toaster/>
  </BrowserRouter>,
)
