import { Outlet } from "react-router-dom";
import { Sidebar3 } from "./Sidebar3/Sidebar3";

const Layout = () => {
  return (
    <div className="app-container">
      <Sidebar3 />
      <main className="content">
        <Outlet /> {/* Aquí se renderizan los demás componentes */}
      </main>
    </div>
  );
};

export default Layout;
