import axios from 'axios';
import { Dispatch } from 'redux';
import {
  CART_REQUEST,
  CART_SUCCESS,
  CART_FAIL,
  CART_ADD_REQUEST,
  CART_ADD_SUCCESS,
  CART_ADD_FAIL,
  CART_DELETE_REQUEST,
  CART_DELETE_SUCCESS,
  CART_DELETE_FAIL,
} from '../constants';
import { Cart, Product } from '../types';

type CartRequestAction = {
  type: typeof CART_REQUEST;
};

type CartSuccessAction = {
  type: typeof CART_SUCCESS;
  payload: Cart[];
};

type CartFailAction = {
  type: typeof CART_FAIL;
  payload: string;
};

export type CartAction = CartRequestAction | CartSuccessAction | CartFailAction;

export const cartsAction = () => async (dispatch: Dispatch<CartAction>) => {
  try {
    dispatch({ type: CART_REQUEST });

    const { data } = await axios.get<Cart[]>('http://localhost:3003/carts');

    dispatch({
      type: CART_SUCCESS,
      payload: data,
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: CART_FAIL,
        payload: message,
      });
    } else {
      // Handle non-Axios errors
      dispatch({
        type: CART_FAIL,
        payload: 'An unknown error occurred',
      });
    }
  }
};

type CartAddRequestAction = {
  type: typeof CART_ADD_REQUEST;
};

type CartAddSuccessAction = {
  type: typeof CART_ADD_SUCCESS;
  payload: Cart;
};

type CartAddFailAction = {
  type: typeof CART_ADD_FAIL;
  payload: string;
};

export type CartAddAction =
  | CartAddRequestAction
  | CartAddSuccessAction
  | CartAddFailAction;

export const cartAddAction =
  (product: Product) => async (dispatch: Dispatch<CartAddAction>) => {
    try {
      dispatch({ type: CART_ADD_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const body = {
        product,
      };

      const { data } = await axios.post<Cart>(
        'http://localhost:3003/carts',
        body,
        config
      );

      dispatch({
        type: CART_ADD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({
          type: CART_ADD_FAIL,
          payload: message,
        });
      } else {
        // Handle non-Axios errors
        dispatch({
          type: CART_ADD_FAIL,
          payload: 'An unknown error occurred',
        });
      }
    }
  };

type CartDeleteRequestAction = {
  type: typeof CART_DELETE_REQUEST;
};

type CartDeleteSuccessAction = {
  type: typeof CART_DELETE_SUCCESS;
  payload: object;
};

type CartDeleteFailAction = {
  type: typeof CART_DELETE_FAIL;
  payload: string;
};

export type CartDeleteAction =
  | CartDeleteRequestAction
  | CartDeleteSuccessAction
  | CartDeleteFailAction;

export const cartDeleteAction =
  (cartId: number) => async (dispatch: Dispatch<CartDeleteAction>) => {
    try {
      dispatch({ type: CART_DELETE_REQUEST });

      const { data } = await axios.delete(
        `http://localhost:3003/carts/${cartId}`
      );

      dispatch({
        type: CART_DELETE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({
          type: CART_DELETE_FAIL,
          payload: message,
        });
      } else {
        // Handle non-Axios errors
        dispatch({
          type: CART_DELETE_FAIL,
          payload: 'An unknown error occurred',
        });
      }
    }
  };
