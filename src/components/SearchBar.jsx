import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../features/cart/cartSlice';
import { selectSearchTerm } from '../features/cart/cartSelectors';

export default function SearchBar() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  return (
    <div className="search-wrap">
      <label className="sr-only" htmlFor="product-search">Search products</label>
      <input
        id="product-search"
        type="search"
        value={searchTerm}
        onChange={(event) => dispatch(setSearchTerm(event.target.value))}
        placeholder="Search products..."
      />
    </div>
  );
}