import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div id="Navbar">
      <h1>BookStore</h1>
      <nav>
        <Link to="/">Books</Link>
        <Link to="/categories">Categories</Link>
      </nav>
    </div>
  );
}

export default Navbar;
