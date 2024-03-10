import { NavigateFunction } from 'react-router-dom';
import { addToCartAction } from '../actions';
import { AppDispatch } from '../store';

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
