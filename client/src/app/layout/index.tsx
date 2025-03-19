import { Footer } from '@/shared/ui/Footer';
import { Header } from '@/shared/ui/Header';
import { Outlet } from 'react-router';

export const Layout = () => {
  const noHeaderFooterPaths = ['/login', '/register'];
  const currentPath = window.location.pathname;

  return (
    <>
      {!noHeaderFooterPaths.includes(currentPath) && <Header />}
      <main className="flex-grow">
        <Outlet />
      </main>
      {!noHeaderFooterPaths.includes(currentPath) && <Footer />}
    </>
  );
};
