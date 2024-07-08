import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink to="/">All Posts</NavLink>
      <NavLink to="/add-post">Add Post</NavLink>
    </nav>
  );
}
