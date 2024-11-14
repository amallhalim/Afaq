// src/routes/routes.jsx
import App from "../App";
import Home from "../pages/home/Home";

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
    ],
  }
];

export default routes;
