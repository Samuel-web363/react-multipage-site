
import { Link } from "react-router-dom";
import "../App.css";

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="logo">ReactRouter Blog</div>
      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
