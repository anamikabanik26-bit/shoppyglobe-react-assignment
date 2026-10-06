import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addToCart } from '../features/cart/cartSlice';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

export default function ProductDetail() {
  //fetch and display detailed information about a specific product, and handle adding the product to the cart.
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProduct() {
      try {
        setLoading(true);
        setError('');

        const response = await fetch(`https://dummyjson.com/products/${id}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error('Product not found.');
        }

        const data = await response.json();
        setProduct(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message || 'Failed to load product details.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchProduct();

    return () => controller.abort();
  }, [id]);

  if (loading) return <Loading message="Loading product details..." />;
  if (error || !product) return <ErrorMessage message={error || 'Product not found.'} />;

  return (
    <section className="container detail-page">
      <Link to="/" className="back-link">← Back to products</Link>
      <div className="detail-card">
        <div className="detail-image">
          <img src={product.thumbnail} alt={product.title} loading="lazy" />
        </div>

        <div className="detail-info">
          <p className="product-category">{product.category}</p>
          <h1>{product.title}</h1>
          <p className="rating">⭐ {product.rating} / 5</p>
          <p className="detail-description">{product.description}</p>
          <p className="detail-price">${product.price.toFixed(2)}</p>
          <p className="stock">Stock available: {product.stock}</p>
          <button
            type="button"
            className="button primary"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}