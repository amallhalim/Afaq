// src/routes/router.js
import { createBrowserRouter } from "react-router-dom";
import routes from "./routes"; 

// Create and configure the router with future flags for v7 compatibility
const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_startTransition: true,
    v7_normalizeFormMethod: true,
    v7_skipActionStatusRevalidation: true,
    v7_skipActionErrorRevalidation: true,
    v7_partialHydration: true,
    v7_prependBasename: true,
  },
});

export default router;
