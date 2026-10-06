import ProductList from '../components/ProductList';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <div>
            <p className="eyebrow">Simple shopping, smarter experience</p>
            <h1>Everything you need, all in one globe.</h1>
            <p className="hero-text">
              Discover quality products, add your favourites to the cart and
              complete your order in a few clicks.
            </p>
          </div>
          <div className="hero-art" aria-hidden="true">🌎🛍️</div>
        </div>
      </section>
      <ProductList />
    </>
  );
}