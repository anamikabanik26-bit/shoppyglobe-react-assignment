import { useDispatch } from 'react-redux';
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from '../features/cart/cartSlice';
import PropTypes from 'prop-types';

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      <img src={item.thumbnail} alt={item.title} loading="lazy" />
      <div className="cart-item-info">
        <h3>{item.title}</h3>
        <p>${item.price.toFixed(2)} each</p>
        <div className="quantity-controls" aria-label={`Quantity controls for ${item.title}`}>
          <button
            type="button"
            className="quantity-button"
            onClick={() => dispatch(decreaseQuantity(item.id))}
            disabled={item.quantity <= 1}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span>{item.quantity}</span>
          <button
            type="button"
            className="quantity-button"
            onClick={() => dispatch(increaseQuantity(item.id))}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>
      <div className="cart-item-actions">
        <strong>${(item.price * item.quantity).toFixed(2)}</strong>
        <button
          type="button"
          className="text-button danger"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove
        </button>
      </div>
    </article>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};
