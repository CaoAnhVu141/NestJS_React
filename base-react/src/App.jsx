
import Header from './Components/layout/header';
import Footer from './Components/layout/footer';
import './Components/todo/todo.css'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
