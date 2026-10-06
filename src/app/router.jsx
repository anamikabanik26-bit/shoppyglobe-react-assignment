import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { App } from '../components/App';
import Loading from '../components/Loading';

// Route-level code splitting keeps the initial bundle smaller.
const Home = lazy(() => import('../pages/Home'));
const ProductDetail = lazy(() => import('../pages/ProductDetail'));
const Cart = lazy(() => import('../pages/Cart'));
const Checkout = lazy(() => import('../pages/Checkout'));
const NotFound = lazy(() => import('../pages/NotFound'));

const withSuspense = (Component) => (
  <Suspense fallback={<Loading message="Loading page..." />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: withSuspense(Home) },
      { path: 'products/:id', element: withSuspense(ProductDetail) },
      { path: 'cart', element: withSuspense(Cart) },
      { path: 'checkout', element: withSuspense(Checkout) },
      { path: '*', element: withSuspense(NotFound) },
    ],
  },
]);
