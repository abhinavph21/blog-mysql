import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Navbar />
      <Home />
      <Footer />
    </div>,
  },
  {
    path: "/login",
    element: <Login />,
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
