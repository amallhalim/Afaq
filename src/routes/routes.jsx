// src/routes/routes.jsx
import App from "../App";
import Home from "../pages/home/Home";
import Setting from "../pages/home/setting/Setting";

const routes = [
  {
    path: "/",
    element: <App />,
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
        path: "Setting",
        element: <Setting/>,
      },
    ],
  }
];

export default routes;
