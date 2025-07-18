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
import BookPage from './pages/books.jsx';
import TodoApp from './Components/todo/todoApp.jsx';
import ErrorPage from './pages/errors.jsx';
import { AuthWraper } from './Components/context/auth.context.jsx';
import PrivateRoute from './pages/private-route.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
        path: "/book",
        element:
          <PrivateRoute>
            <BookPage />,
          </PrivateRoute>
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
    <AuthWraper>
      <RouterProvider router={router} />
    </AuthWraper>
  </React.StrictMode>,
)
