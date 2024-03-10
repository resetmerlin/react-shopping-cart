import { createBrowserRouter } from 'react-router-dom';
import { CartPage, HomePage, OrderPage, ProductPage } from '../page';

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
  {
    path: '/order',
    element: <OrderPage />,
  },
]);

export default router;
