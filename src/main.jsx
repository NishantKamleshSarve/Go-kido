import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import City from './pages/City.jsx';
import Partner from './pages/Partner.jsx';
import GokidoTool from './pages/GokidoTool.jsx';
import Login from './pages/Login.jsx';



// Create the router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='city' element={<City />} />
      <Route path='city/:cityName' element={<City />} />
      <Route path='partner' element={<Partner />} />
      <Route path='gokido-tool' element={<GokidoTool />} />
      <Route path='login' element={<Login />} />
    </Route>
  )
);

// Render the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
