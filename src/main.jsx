import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/rootLayout.jsx'
import Home from './pages/homePage/home.jsx'
import TimeLine from './pages/timeLine/timeLine.jsx'
import Stats from './pages/stats/stats.jsx'
import NotFoundPage from './pages/notFoundPage/notFoundPage.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
      {
        index:"true",
        element: <Home></Home>
      },
      {
        path:"/timeLine",
        element: <TimeLine></TimeLine>
      },
      {
        path:"/state",
        element: <Stats></Stats>
      },
    ],

    errorElement: <NotFoundPage></NotFoundPage>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />

  </StrictMode>,
)
