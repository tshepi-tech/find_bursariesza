//NPM packages
import { Link, NavLink } from "react-router-dom";

//Project Files

export default function Navigation() {
  return (
    <nav>
      <Link to="/">
        <h4>Dashboard</h4>
      </Link>
      <ul>
        <NavLink to="Create Account">Create Account </NavLink>
        <NavLink to="Log in">Log in </NavLink>
        <NavLink to="Reset Password">Reset Password</NavLink>
      </ul>
    </nav>
  )
}
