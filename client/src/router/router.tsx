import { createBrowserRouter } from 'react-router-dom';
import { CartPage, HomePage, ProductPage } from '../page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/product',
    element: <ProductPage />,
    children: [{ path: ':id', element: <ProductPage /> }],
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
]);

export default router;
