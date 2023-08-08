import { RouterProvider } from 'react-router-dom';
import { router } from './router/Router';
import { ToastContainer } from 'react-toastify';
import './App.css';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer className=" top-10" />

    </div>
  );
}

export default App;
