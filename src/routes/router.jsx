// src/routes/router.js
import { createBrowserRouter } from "react-router-dom";
import routes from "./routes"; 

// Create and configure the router
const router = createBrowserRouter(routes, {
  future: {
    v7_normalizeFormMethod: true,
  },
});

export default router;
