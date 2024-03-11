import { createBrowserRouter } from 'react-router-dom';
import {
  CartPage,
  HomePage,
  OrderPage,
  ProductPage,
  OrderListPage,
} from '../pages';

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
  {
    path: '/orderList',
    element: <OrderListPage />,
  },
]);

export default router;
