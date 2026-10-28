import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => (
    <ul className="Navbar">
      <li>
        <button>
          Shop
        </button>
      </li>
      <li>
        <Link to="/about">
        <button>
          About
        </button>
        </Link>
      </li>
      <li>
        <button>
          Contact
        </button>
      </li>
    </ul>
);

export default Navbar