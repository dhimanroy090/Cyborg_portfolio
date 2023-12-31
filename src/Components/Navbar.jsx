import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const NavItems = (
    <>
      <li><Link to="">Portfolio</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/blog">Blogs</Link></li>
      <li><Link to="">Contact</Link></li>
      
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       
         {NavItems}
      
      </ul>
    </div>
    <img src={logo} className="w-40 h-20"/>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
        {NavItems}
      
      
    </ul>
  </div>

</div>
    </div>
  );
};

export default Navbar;
