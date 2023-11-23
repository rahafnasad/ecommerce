import { createBrowserRouter } from "react-router-dom";
import CategoriesDash from "../component/dashbord/Categories.jsx";
import HomeDash from "../component/dashbord/Home.jsx";
import Categories from "../component/user/Categories.jsx";
import Home from "../component/user/Home.jsx";
import LayoutDash from "./LayoutDash.jsx";
import LayoutUser from "./LayoutUser.jsx";
import Register from "../component/user/register/Register.jsx";

export const router = createBrowserRouter([
    {path:'/',
  element: <LayoutUser/>,
  errorElement: <h2> 404 bage not found -- user</h2>,

  children:[
    {
      path:'home',
      element:<Home/>
    },
    {
      path:'categories',
      element:<Categories/>
    },
    {
      path:'regiseter',
      element:<Register/>
    },
    {
        path:'*',
        element: <h2> bage not fount -- web (user)</h2>
      }
  ]

},
  {path:'/dashboard',
  element: <LayoutDash/>,
  errorElement: <h2> 404 bage not found -- dashbord</h2>,
children:[
  {
    path:'home',
    element:<HomeDash/>
  },
 
  {
    path:'categories',
    element:<CategoriesDash/>
  }
  ,
    {
        path:'*',
        element: <h2> bage not fount -- Dashbord (Admain)</h2>
      }

]}

  ])