import { Outlet } from 'react-router-dom';
import Header from './Header';

export function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} ShoppyGlobe. Built with React.</p>
      </footer>
    </div>
  );
}