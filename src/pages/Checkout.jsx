import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { clearCart } from '../features/cart/cartSlice';
import {
  selectCartItems,
  selectCartTotal,
} from '../features/cart/cartSelectors';

export default function Checkout() {
  //handle the checkout process, including form submission and order confirmation.
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    pincode: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (items.length === 0 && !submitted) {
    return (
      <section className="container empty-page">
        <div className="status-card">
          <h1>No items to checkout</h1>
          <p>Your cart is currently empty.</p>
          <Link to="/" className="button primary">Go Shopping</Link>
        </div>
      </section>
    );
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(clearCart());
    setSubmitted(true);
    setTimeout(() => navigate('/'), 1200);
  };

  if (submitted) {
    return (
      <section className="container empty-page">
        <div className="status-card success-card">
          <div className="success-icon">✓</div>
          <h1>Order placed!</h1>
          <p>Thank you for shopping with ShoppyGlobe.</p>
          <p>Redirecting you to the Home page...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="container page-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Almost there</p>
          <h1>Checkout</h1>
        </div>
      </div>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Customer Details</h2>

          <label>
            Full Name
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>

          <label>
            Email
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>

          <label>
            Address
            <textarea name="address" value={form.address} onChange={handleChange} required />
          </label>

          <div className="form-grid">
            <label>
              City
              <input name="city" value={form.city} onChange={handleChange} required />
            </label>
            <label>
              Pincode
              <input
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                inputMode="numeric"
                pattern="[0-9]{6}"
                required
              />
            </label>
          </div>

          <button type="submit" className="button primary full-width">
            Place Order
          </button>
        </form>

        <aside className="summary-card">
          <h2>Products</h2>
          {items.map((item) => (
            <div className="summary-product" key={item.id}>
              <span>{item.title} × {item.quantity}</span>
              <strong>${(item.price * item.quantity).toFixed(2)}</strong>
            </div>
          ))}
          <div className="summary-row total">
            <span>Total</span>
            <strong>${total.toFixed(2)}</strong>
          </div>
        </aside>
      </div>
    </section>
  );
}