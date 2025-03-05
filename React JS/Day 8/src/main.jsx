import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CartProvider from './components/CartProvider.jsx'

createRoot(document.getElementById('root')).render(
    <CartProvider>
        <App />
    </CartProvider>
)
