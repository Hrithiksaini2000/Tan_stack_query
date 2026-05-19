// Create a router 

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { MainLayout } from "./components/Layout/Mainlayout"
import { Home } from "./pages/Home"
import { Fetchold } from "./pages/Fetchold"
import { Fetchrq } from "./pages/Fetchrq"


//  Modern way of creating the routes 

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Layout Route
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/trad",
        element: <Fetchold />
      },
      {
        path: "/rq",
        element: <Fetchrq />
      }
    ]
  }
])

const App = () => {
  // Declaring RouterProvider for routes
 return <RouterProvider router={router}></RouterProvider>
}

export default App