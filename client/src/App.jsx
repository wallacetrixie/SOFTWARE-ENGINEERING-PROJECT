import { useContext } from "react";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext";
import NavBar from "./components/navbar/Navbar";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  function Layout() {
    return (
      <div className={`app ${darkMode ? "dark-theme" : ""}`}>
        <NavBar />
        <div style={{ width: "100%"}}>
          <Outlet />
        </div>
      </div>
    );
  }

  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <Home />,
    // },
    {
      path: "/client",
      element: <Layout />,
      children: [
        // {
        //   path: "/client/landing",
        //   element: <Landing />,
        // },
        // {
        //   path: "/client/profile",
        //   element: <Profile />,
        // },
        {
          path: "/client/dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
