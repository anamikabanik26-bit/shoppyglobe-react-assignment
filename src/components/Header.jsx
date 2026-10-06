import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../features/cart/cartSelectors';

export default function Header() {
  const cartCount = useSelector(selectCartCount);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="brand" aria-label="ShoppyGlobe home">
          🛍️ ShoppyGlobe
        </NavLink>

        <nav className="nav-links" aria-label="Main navigation">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
          <NavLink to="/cart" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Cart <span className="cart-badge">{cartCount}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}