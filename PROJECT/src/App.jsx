// import Home from './Homepage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Landing from './pages/landing/Landing.jsx';
import Profile from './pages/profile/Profile.jsx';
import NavBar from './components/navBar/NavBar.jsx';
import LeftBar from './components/leftBar/LeftBar.jsx';
import RightBar from './components/rightBar/RightBar.jsx';
import './App.css';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';

function App() {

  const { darkMode } = useContext(DarkModeContext);
  function Layout() {
    return (
      <div className={`app ${darkMode ? 'dark-theme' : ''}`}>
        <NavBar />
        <div style={{ display: 'flex' }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/landing",
      element: <Layout />,
      children: [
        {
          path: "/landing",
          element: <Landing />,
        },
        {
          path: "/landing/profile",
          element: <Profile />,
        },
      ]
    }
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
    // {
    //   path: "/register",
    //   element: <Register />,
    // },
  ]);



  return (
    <RouterProvider router={router} />
  )

  // return (
  //     <>
  //         <Home/>
  //     </>
  // );

};
export default App;