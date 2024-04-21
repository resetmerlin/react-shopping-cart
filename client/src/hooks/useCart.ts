import { NavigateFunction } from 'react-router-dom';
import { AppDispatch } from '../redux/store';
import { addToCartAction } from '../redux';

// eslint-disable-next-line import/prefer-default-export
export const useAddToCart = (
  name: string,
  id: number,
  price: number,
  imageUrl: string,
  navigate: NavigateFunction,
  dispatch: AppDispatch
) => {
  const cart = { name, id, price, imageUrl };
  dispatch(addToCartAction(cart));
  navigate('/cart');
};
