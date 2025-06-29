import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/login.jsx';
import UserPage from './pages/user.jsx';
import RegisterPage from './pages/register.jsx';
import ProductPage from './pages/product.jsx';
import TodoApp from './Components/todo/todoApp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
      index: true,
      element: <TodoApp />,
      }
      , {
        path: "/user",
        element: <UserPage />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
