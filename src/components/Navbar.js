import { Link } from 'react-router-dom';
import './css/Navbar.css';
import { IoIosPerson } from 'react-icons/io';

function Navbar() {
  return (
    <div className="main-nav">
      <div id="Navbar" className="panel-bg">
        <div id="page-head">
          <h1 className="Bookstore-CMS">BookStore CMS</h1>
          <nav>
            <Link to="/" className="BOOKS">Books</Link>
            <Link to="/categories" className="CATEGORIES">Categories</Link>
          </nav>
        </div>
        <button className="profile-icon" type="button">
          <IoIosPerson className="userIcon" />
        </button>

      </div>
    </div>
  );
}

export default Navbar;
