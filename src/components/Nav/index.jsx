import './nav.css'
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="containerNav">
      <h1>Welcome to the world of React</h1>

      <nav className='contarnerMenu'>
        <ul className='menu'>
          <li className='NavLi'>Products</li>
          <li className='NavLi'> <Link to='/login'>Logout</Link> </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
