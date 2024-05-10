import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { About, Home, Products, Team } from "./pages"

const router = createBrowserRouter([
  { path: "/", element: <Home />, index: true },
  {
    path: "/about",
    element: <About />,
  },
  { path: "/products", element: <Products /> },
  {
    path: "/team",
    element: <Team />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
