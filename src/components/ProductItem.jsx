import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../features/cart/cartSlice';
import PropTypes from 'prop-types';

export default function ProductItem({ product }) {
  //display product information and handle adding the product to the cart.
  const dispatch = useDispatch();

  return (
    <article className="product-info">
      <p className="product-category">{product.category}</p>
      <h2 className="product-title">
        <Link to={`/products/${product.id}`}>{product.title}</Link>
      </h2>
      <div className="product-meta">
        <strong>${product.price.toFixed(2)}</strong>
        <span>⭐ {product.rating}</span>
      </div>
      <button
        type="button"
        className="button primary full-width"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
    </article>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};
