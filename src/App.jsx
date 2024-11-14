import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <p>My App Header</p>
      {/* <Outlet> renders nested routes here */}
      <Outlet />
    </div>
  );
}

export default App;
