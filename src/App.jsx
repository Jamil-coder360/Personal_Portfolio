import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Homepage from './pages/Homepage';
import Mainlayout from './components/Mainlayout';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Mainlayout />,
    children:[
      {
        index:true,
        element:<Homepage />
      },
    ]
  },
]);
const App = () => {
  return (
     <RouterProvider router={router} />
     
  )
}

export default App