import React from 'react'
import ReactDom from 'react-dom/client'
import { StrictMode } from 'react'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'
import Login from './pages/Login.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import Signup from './pages/Signup.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <HomePage />,
  errorElement: <NotFoundPage />,
},
{
  path: '/login',
  element: <Login />
},
{
  path: '/signup',
  element: <Signup />
},

])

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
