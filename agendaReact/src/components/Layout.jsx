import { Outlet } from "react-router-dom";
import { Sidebar3 } from "./Sidebar3/Sidebar3";
import InfoUsuarioComponent from "./InfoUsuario/InfoUsuarioComponent";

const Layout = () => {
  return (
    <div className="app-container">
      <Sidebar3 />
      <InfoUsuarioComponent/>
      <main className="content">
        <Outlet /> {/* Aquí se renderizan los demás componentes */}
      </main>
    </div>
  );
};

export default Layout;
