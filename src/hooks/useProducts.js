import { useEffect, useState } from 'react';

const PRODUCTS_API = 'https://dummyjson.com/products';

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProducts() {
      try {
        setLoading(true);
        setError('');

        const response = await fetch(PRODUCTS_API, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Unable to fetch products (HTTP ${response.status}).`);
        }

        const data = await response.json();
        setProducts(data.products ?? []);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message || 'Failed to load products.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchProducts();

    return () => controller.abort();
  }, []);

  return { products, loading, error };
}