// Create a router 

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { MainLayout } from "./components/Layout/Mainlayout"
import { Home } from "./pages/Home"
import { Fetchold } from "./pages/Fetchold"
import { Fetchrq } from "./pages/Fetchrq"
import "../src/App.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"


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

// New Queryclient 
const queryclient = new QueryClient()

const App = () => {

  // Declaring RouterProvider for routes
  return (
    // Query client provider 
    <QueryClientProvider client={queryclient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  )
}

export default App