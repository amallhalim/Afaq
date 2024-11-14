// src/pages/ErrorPage.jsx
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  // Check if the error is an HTTP response (e.g., 404, 500)
  if (isRouteErrorResponse(error)) {
    if (error?.status === 404) {
      return (
        <div>
          <h1>Page Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
        </div>
      );
    }

    if (error?.status === 403) {
      return (
        <div>
          <h1>Access Forbidden</h1>
          <p>You do not have permission to view this page.</p>
        </div>
      );
    }

    // Handle other response statuses
    return (
      <div>
        <h1>Error {error?.status}</h1>
        <p>{error?.statusText}</p>
      </div>
    );
  }

  // Handle non-HTTP errors (e.g., network errors, thrown JavaScript errors)
  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{error?.message || "An unexpected error occurred."}</p>
    </div>
  );
};

export default ErrorPage;
