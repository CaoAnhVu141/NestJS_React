
import Header from './Components/layout/header';
import Footer from './Components/layout/footer';
import './Components/todo/todo.css'
import { Outlet } from 'react-router-dom';
import { getAccountAPI } from './services/api.service';
import { useContext, useEffect } from 'react';
import { AuthContext } from './Components/context/auth.context';
import { Spin } from 'antd';

function App() {

  useEffect(() => {
    getHandleAccount();
  }, [])

  // set userLogin when refresh
  const { setUserLogin, isAppLoading, setIsAppLoading } = useContext(AuthContext);

  const delayLoading = (milSencond) => {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve()
          }, milSencond);
    });
  }

  // when refresh (f5) no delete data
  const getHandleAccount = async () => {
    const response = await getAccountAPI();
    await delayLoading(800);
    if (response.data) {
      setUserLogin(response.data.user)
    }
    setIsAppLoading(false);
  }
  return (
    <>
      {isAppLoading === true ?
        <div style={{ 
          position: "fixed",
          alignItems: "center",
          left: "50%",
          right: "50%",
          top: "50%",
          height: "50px", width: "100px"
         }}>
           <Spin />
         </div>
        :
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      }
    </>
  )
}

export default App
