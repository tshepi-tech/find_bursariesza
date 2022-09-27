//NPM packages
import { Route, Routes } from "react-router";

//Project files
import CreateAccount from "Pages/CreateAccount";
import Dashboard from "Components/Dashboard";
import Navigation from "Components/Navigation";

export default function  App () {

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Create Account" element={<CreateAccount />} />
        <Route path="/Log in" element={<CreateAccount />} />
        <Route path="/Forgot Password" element={<CreateAccount />} />
      </Routes>
    </div>
  );
}

