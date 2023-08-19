import { RouterProvider } from 'react-router-dom';
import { router } from './router/Router';
import { ToastContainer } from 'react-toastify';
import './App.css';
import { useContext, useEffect } from 'react';
import { AuthContext } from './context/UserContext/UserContext';

function App() {
  const { theme, setTheme } = useContext(AuthContext)

  useEffect(() => {
    document.body.className = theme
  }, [theme])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer className=" top-10" />

    </div>
  );
}

export default App;
