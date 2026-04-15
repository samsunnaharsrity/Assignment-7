import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './router/routes.jsx'



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout></RootLayout>,
//     children:[
//       {
//         index:"true",
//         element: <Home></Home>
//       },
//       {
//         path:"/timeLine",
//         element: <TimeLine></TimeLine>
//       },
//       {
//         path:"/state",
//         element: <Stats></Stats>
//       },
//     ],

//     errorElement: <NotFoundPage></NotFoundPage>
//   },
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />

  </StrictMode>,
)
