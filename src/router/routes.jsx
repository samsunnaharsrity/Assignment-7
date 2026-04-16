import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/rootLayout";
import Home from "../pages/homePage/home";
import Stats from "../pages/stats/stats";
import NotFoundPage from "../pages/notFoundPage/notFoundPage";
import FriendsDetails from "../pages/friendsDetails/friendsDetails";
import TimeLine from "../pages/timeLine/timeLine";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
      {
        index:true,
        element: <Home></Home>,
        loader : () => fetch('/friends.json'),
      },
      {
        path:'/friends/:id',
        element : <FriendsDetails></FriendsDetails>
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
