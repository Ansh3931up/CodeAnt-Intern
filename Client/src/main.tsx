import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';
import HomePage from './page/HomePage';
import SigninPage from './page/SigninPage'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path=''  >
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/signin' element={<SigninPage/>}></Route>
    </Route>
    
  )
);
ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>


        <Toaster />
        <RouterProvider router={router} />
      
        

  </React.StrictMode>
);

