import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import {
  selectCartItems,
  selectCartTotal,
} from '../features/cart/cartSelectors';

export default function Cart() {
  //display the shopping cart with items, total cost, and a link to proceed to checkout.
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  if (items.length === 0) {
    return (
      <section className="container empty-page">
        <div className="status-card">
          <h1>Your cart is empty 🛒</h1>
          <p>Add some products before checking out.</p>
          <Link to="/" className="button primary">Continue Shopping</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="container page-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Your selections</p>
          <h1>Shopping Cart</h1>
        </div>
      </div>

      <div className="cart-layout">
        <div className="cart-list">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <aside className="summary-card">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Items</span>
            <span>{items.reduce((sum, item) => sum + item.quantity, 0)}</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <strong>${total.toFixed(2)}</strong>
          </div>
          <Link to="/checkout" className="button primary full-width">
            Proceed to Checkout
          </Link>
        </aside>
      </div>
    </section>
  );
}