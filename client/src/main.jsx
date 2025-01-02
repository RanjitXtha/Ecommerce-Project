import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { ShopContextProvider } from './Context/ShopContext.jsx';
import { AuthProvider } from './Context/AuthContext.jsx';
import { AdminAuthProvider } from './Context/AdminAuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdminAuthProvider>
    <AuthProvider>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
    </AuthProvider>
    </AdminAuthProvider>
  </StrictMode>,
)
