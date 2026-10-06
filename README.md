# ShoppyGlobe E-commerce Application

A Vite + React e-commerce application built for the Internshala React project.

## Features

- Vite React setup
- Reusable functional components with PropTypes validation
- Props for parent-to-child data flow
- DummyJSON product API with `useEffect`
- Custom `useProducts` hook
- Product detail fetching using route parameters
- Error and loading states
- Redux Toolkit cart state
- Redux actions, reducers and selectors
- Search using Redux state
- Add, remove, increase and decrease cart quantities
- Quantity never goes below 1
- React Router with `createBrowserRouter`
- Dynamic `/products/:id` route
- Home, Product Detail, Cart, Checkout and 404 routes
- Checkout order placement clears cart and redirects home
- `React.lazy` + `Suspense` route-level code splitting for Home, Product Detail, Cart, Checkout and 404 pages
- Lazy-loaded product images
- Responsive CSS
- Unique React list keys
- 25 meaningful Git commits requirement can be satisfied using the included commit plan below

## Run

```bash
npm install
npm run dev
```

Then open the URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
├── app/
│   ├── router.jsx
│   └── store.js
├── components/
│   ├── CartItem.jsx
│   ├── ErrorMessage.jsx
│   ├── Header.jsx
│   ├── Loading.jsx
│   ├── ProductItem.jsx
│   ├── ProductList.jsx
│   └── SearchBar.jsx
├── features/
│   └── cart/
│       ├── cartSlice.js
│       └── cartSelectors.js
├── hooks/
│   └── useProducts.js
├── pages/
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── Home.jsx
│   ├── NotFound.jsx
│   └── ProductDetail.jsx
├── styles/
│   └── index.css
└── main.jsx
```

## API

Products:
`https://dummyjson.com/products`

Product details:
`https://dummyjson.com/products/:id`

## Assignment checklist

- [x] Vite + React setup
- [x] Required component structure
- [x] Props and reusable functional components
- [x] useEffect product fetching and custom hook
- [x] Product-detail fetching from route parameter
- [x] Loading and API error handling
- [x] Redux Toolkit cart state, actions, reducers and selectors
- [x] Redux-based product search
- [x] Add, remove, increase and decrease cart quantity
- [x] Quantity protected from going below 1
- [x] createBrowserRouter with dynamic product route
- [x] Checkout, order confirmation, cart clearing and redirect
- [x] 404 NotFound page
- [x] Unique list keys
- [x] React.lazy + Suspense code splitting
- [x] Lazy-loaded product images
- [x] Responsive styling

## Git commit plan

The assignment asks for at least 25 relevant commits. Use small, meaningful commits while developing. Suggested sequence:

1. initialize Vite React project
2. add application entry point
3. add global responsive styles
4. create App shell
5. create Header component
6. configure Redux store
7. create cart slice
8. add cart selectors
9. add ProductItem component
10. add ProductList component
11. add custom useProducts hook
12. add API loading state
13. add API error handling
14. add search state
15. add SearchBar component
16. add ProductDetail page
17. add dynamic product route
18. add Cart page
19. add CartItem quantity controls
20. add Checkout page
21. add order placement flow
22. add NotFound page
23. add lazy loading and Suspense
24. improve responsive styling
25. update README and final cleanup

If you are creating the Git history from scratch, make each commit after the corresponding feature is completed. Do not make fake/empty commits just to reach 25; the assignment explicitly asks for relevant commits.
## Project Features

- React based e-commerce application
- Product listing and product details
- Shopping cart
- Search functionality
- Checkout page
- Responsive UI
## Features
- Product browsing and search
- Product details
- Shopping cart management
- Quantity controls
- Checkout and responsive UI

## Tech Stack
- React
- React Router
- Redux Toolkit
- Vite
- JavaScript
- CSS

## Installation
1. Run npm install
2. Run npm run dev
3. Open the local Vite URL in your browser

## API Endpoints
- Product list: https://dummyjson.com/products
- Product details: https://dummyjson.com/products/:id

## State Management
Redux is used to manage cart state, including adding products, removing products, and updating quantities.

## Routing
React Router is used for Home, Product Details, Cart, Checkout, and a Not Found page. Product details use a dynamic product ID route.

## Performance Optimization
The application uses React.lazy and Suspense for code splitting, along with lazy-loaded product images to improve loading performance.

## Error Handling
The application handles API failures and displays appropriate error messages while loading product data and product details.
