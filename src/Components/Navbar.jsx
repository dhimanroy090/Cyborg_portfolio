import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const NavItems = (
    <div>
      <ul className="menu menu-horizontal px-1 space-x-5 text-lg font-semibold">
        <Link to="">Portfolio</Link>
        <Link to="">Projects</Link>
        <Link to="/src/Components/Blog/Blog.jsx">Blogs</Link>
        <Link to="">Contact</Link>
      </ul>
    </div>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <img className="w-40 h-20" src={logo} alt="cyborg" />
        </div>
        <div className="flex-none">{NavItems}</div>
      </div>
    </div>
  );
};

export default Navbar;
