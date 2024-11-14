// src/routes/routes.jsx
import App from "../App";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/home/Home";
import Preferences from "../pages/home/setting/Preferences";
import Profile from "../pages/home/setting/Profile";
import Setting from "../pages/home/setting/Setting";
import ProtectedRoute from "./ProtectedRoute";

const routes = [
  {
    path: "/",
		element: <App />,
	    errorElement: <ErrorPage />, // Error component for the main route

    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "c",
        element: <div>cccccccccccccccc</div>,
      },
      {
        path: "hello",
        element: <div>Hello world!</div>,
		},
     {
        path: "setting",
        element: (
          <ProtectedRoute>
            <Setting />
          </ProtectedRoute>
		 ),
        children: [
          {
            path: "profile",
            element: <Profile />, // Nested route under Setting
          },
          {
            path: "preferences",
            element: <Preferences />, // Nested route under Setting
          },
        ],
      },
    ],
  }
];

export default routes;
