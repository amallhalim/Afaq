import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav aria-label="breadcrumb">
      <ol style={{ display: "flex", listStyleType: "none", padding: 0 }}>
        {pathnames.length > 0 ? (
          <li>
            <Link to="/">Home</Link>
            <span> / </span>
          </li>
        ) : null}

        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to}>
              {isLast ? (
                <span>{value.charAt(0).toUpperCase() + value.slice(1)}</span>
              ) : (
                <>
                  <Link to={to}>
                    {value.charAt(0).toUpperCase() + value.slice(1)}
                  </Link>
                  <span> / </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
