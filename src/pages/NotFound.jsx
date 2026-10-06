import { Link, useRouteError } from 'react-router-dom';

export default function NotFound() {
  const error = useRouteError();

  return (
    <section className="container empty-page">
      <div className="status-card error-card">
        <p className="error-code">404</p>
        <h1>Page not found</h1>
        <p>
          {error?.statusText || 'The page you requested does not exist.'}
        </p>
        <Link to="/" className="button primary">Back to Home</Link>
      </div>
    </section>
  );
}