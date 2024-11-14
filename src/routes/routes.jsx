// src/routes/routes.jsx
import App from "../App";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import Preferences from "../pages/setting/Preferences";
import Setting from "../pages/setting/Setting";

import ProtectedRoute from "./ProtectedRoute";

const routes = [
  {
    path: "/",
		element: <App />,
	    errorElement: <ErrorPage />, // Error component for the main route

    children: [
      {
        path: "/",
        element: <Home />
      },
            {
        path: "profile",
        element: <Profile/>
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
            path: "preferences/:id",
            element: <Preferences />,
          },
             {
            path: ":home",
            element: <Home />, 
          },
        ],
      },
    ],
  }
];

export default routes;
