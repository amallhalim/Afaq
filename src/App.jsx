import { Outlet } from "react-router-dom";
import Breadcrumb from "./components/header/Breadcrumb";

function App() {
  return (
    <div>
      

      <p>My App Header333333333333</p>
                        <Breadcrumb/>

            <p>My App Header333333333333</p>

      {/* <Outlet> renders nested routes here */}

      <Outlet />
    </div>
  );
}

export default App;
