import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import useUserLocation from '@/hooks/useUserLocation';

function AppLayout() {
  const data = useUserLocation();
  return (
    <>
      <Navbar {...data} />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
