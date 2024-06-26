import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import IntialProvider from './Components/Providers/IntialProvider';
import Reserve from './Components/Pages/Reserve';

import PDFDocument from './Components/InvoicePDF/PDFDocument';
import ErrorPage from './Components/ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/reserve',
        element: <Reserve></Reserve>,
      },
      {
        path: '/invoice',
        element: <PDFDocument></PDFDocument>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IntialProvider>
    <RouterProvider router={router} />
    {false && <PDFDocument/>}
    </IntialProvider>
   
    
  </React.StrictMode>,
)
