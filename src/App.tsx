import { Heading } from '@chakra-ui/react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import AppLayout from '@/components/layout/AppLayout';
import { Home, Collection } from '@/pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path='collection' element={<Collection />} />
      <Route path='collection/:id' element={<Heading>Product Page</Heading>} />
      <Route path='cart' element={<Heading>Product Page</Heading>} />
      <Route path='checkout' element={<Heading>Checkout Page</Heading>} />
      <Route path='payment' element={<Heading>Payment Page</Heading>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
