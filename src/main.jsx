import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FirstPage from './Pages/FirstPage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalAuthProvider } from './Context/AuthCreateContext.jsx'
import LoginPage from './Pages/Login.jsx'
import RegisterPage from './Pages/Register.jsx'
import Index from './Pages/index.jsx'
import RecepiPage from './Components/RecepiComponents/RecepiPage.jsx'
const router = createBrowserRouter([
  {path: "/", element: <FirstPage></FirstPage>},
  {path: "/login", element: <LoginPage></LoginPage>},
  {path: "/register", element: <RegisterPage></RegisterPage>},
  {path: "/index", element: <Index></Index>},
   {path: "/index/:id", element: <RecepiPage></RecepiPage>},
])


createRoot(document.getElementById('root')).render(
<StrictMode>
     <GlobalAuthProvider>
    <RouterProvider  router = {router}/>
    </GlobalAuthProvider>
  </StrictMode>,
)
