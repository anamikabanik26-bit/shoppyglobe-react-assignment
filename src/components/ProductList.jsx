import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import SearchBar from './SearchBar';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';
import useProducts from '../hooks/useProducts';
import { selectSearchTerm } from '../features/cart/cartSelectors';

export default function ProductList() {
  //load products from the API using a custom hook.
  const { products, loading, error } = useProducts();
  const searchTerm = useSelector(selectSearchTerm);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase().trim()),
  );

  if (loading) return <Loading message="Loading products from DummyJSON..." />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section className="container">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Explore our store</p>
          <h1>Popular Products</h1>
        </div>
        <SearchBar />
      </div>

      {filteredProducts.length === 0 ? (
        <div className="status-card">
          <h2>No products found</h2>
          <p>Try a different search term.</p>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/products/${product.id}`} className="product-image-link">
                <img src={product.thumbnail} alt={product.title} loading="lazy" />
              </Link>
              <ProductItem product={product} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}