import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Users from './components/Users/Users.jsx';
import Posts from './components/Posts/Posts.jsx';
import Todos from './components/Todos/Todos.jsx';


const router=createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
         path: "/",
         element: <Home/>
      },
      {
        path: "users",
        element: <Users/>
      },
      {
        path: "posts",
        element: <Posts/>
      },
      {
        path: "todos",
        element: <Todos/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
