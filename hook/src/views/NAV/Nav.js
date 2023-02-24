import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/covid">Covid</NavLink>
        </li>
        <li>
          <NavLink to="/countdown">Countdown</NavLink>
        </li>
        <li>
          <NavLink to="/todo">Todo</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/Users">Users</NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
