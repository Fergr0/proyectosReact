import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUpComponent from "./components/SingUp/SingUpComponent";
import LoginComponent from "./components/Login/LoginComponent";
import Layout from "./components/Layout";
import { AuthProvider } from "./context/authContext";
import VerContactosComponent from "./components/VerContactos/VerContactosComponent";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SignUpComponent />} />
          <Route path="signUp" element={<SignUpComponent />} />
          <Route path="logIn" element={<LoginComponent />} />
          <Route path="ver" element={<VerContactosComponent />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
