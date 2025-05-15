import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Users from './Components/Users.jsx';
import MainLayout from './MainLayout.jsx';
import UserDetails from './Components/UserDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
     {
      index : true ,
      Component: App
     },
     {
      path:'/users/:id',
      loader: ({params})=> fetch(`http://localhost:3000/users/${params.id}`)
      ,Component: UserDetails
     }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
