//NPM packages
import { Route, Routes } from "react-router";

//Project files
import CreateAccount from "Pages/CreateAccount";
import Dashboard from "Components/Dashboard";
import LogIn from "Pages/LogIn";
import Navigation from "Components/Navigation";
import ResetPassword from "Pages/ResetPassword";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Create Account" element={<CreateAccount />} />
        <Route path="/Log in" element={<LogIn />} />
        <Route path="/Reset Password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}
