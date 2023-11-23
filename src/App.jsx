import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {router} from './layouts/RRoutes.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'


export default function App() {

  return (
<RouterProvider router={router}/>
 )
}
