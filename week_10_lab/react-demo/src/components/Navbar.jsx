import { Link, NavLink } from 'react-router'



export default function Navbar() {
return (
  <nav>
    <Link to="/">MyShop Link</Link>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/products">Products</NavLink>
  </nav>
)}