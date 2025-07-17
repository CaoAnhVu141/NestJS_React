
import Header from './Components/layout/header';
import Footer from './Components/layout/footer';
import './Components/todo/todo.css'
import { Outlet } from 'react-router-dom';
import { getAccountAPI } from './services/api.service';
import { useContext, useEffect } from 'react';
import { AuthContext } from './Components/context/auth.context';

function App() {

  useEffect(() => {
      getHandleAccount();
  },[])

  // set userLogin when refresh
  const {setUserLogin} = useContext(AuthContext);

  // when refresh (f5) no delete data
  const getHandleAccount = async () => {
      const response = await getAccountAPI();
      if(response.data){
        setUserLogin(response.data.user)
      }
  }
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
