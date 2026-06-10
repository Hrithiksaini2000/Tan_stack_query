// Create a router 

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { MainLayout } from "./components/Layout/Mainlayout"
import { Home } from "./pages/Home"
import { Fetchold } from "./pages/Fetchold"
import { Fetchrq } from "./pages/Fetchrq"
import "../src/App.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
// import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Fetchindv } from "./components/UI/Fetchindv"

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
      },
      {
        path: "/rq/:id",
        element: <Fetchindv />
      }
    ]
  }
])

// Queryclient is a brain of a react query 
const queryclient = new QueryClient()

const App = () => {

  // Declaring RouterProvider for routes
  return (
    // Query client provider is a main component in react query 
    <QueryClientProvider client={queryclient}>
      <RouterProvider router={router}></RouterProvider>
      {/* Dev tools  */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App