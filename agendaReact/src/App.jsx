import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUpComponent from "./components/SingUp/SingUpComponent";
import LoginComponent from "./components/Login/LoginComponent";
import PruebaComponent from "./components/PruebaComponent";
import UserProvider from "./providers/UserProvider";
import Layout from "./components/Layout";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SignUpComponent />} />
          <Route path="signUp" element={<SignUpComponent />} />
          <Route path="logIn" element={<LoginComponent />} />
          <Route path="prueba" element={<PruebaComponent />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;
