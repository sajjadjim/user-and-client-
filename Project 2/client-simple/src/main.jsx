import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { HydrationBoundary } from '@tanstack/react-query'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import UserDetails from './Components/UserDetails.jsx';
import UserUpdate from './Components/UserUpdate.jsx';
import MainLayout from './Main Layout/MainLayout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: App
      },
      {
        path: '/users/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/users/${params.id}`),
        Component: UserDetails
      },
      {
        path: '/update/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/users/${params.id}`),
        Component: UserUpdate
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>

)
