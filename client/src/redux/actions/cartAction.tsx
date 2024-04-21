import axios from 'axios';
import { Dispatch } from 'redux';
import {
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_FAIL,
  CART_ADD_REQUEST,
  CART_ADD_SUCCESS,
  CART_ADD_FAIL,
  CART_DELETE_REQUEST,
  CART_DELETE_SUCCESS,
  CART_DELETE_FAIL,
} from '../constants';
import { ICart, IProduct } from '../types';

type GetCartRequestAction = {
  type: typeof GET_CART_REQUEST;
};

type GetCartSuccessAction = {
  type: typeof GET_CART_SUCCESS;
  payload: ICart[];
};

type GetCartFailAction = {
  type: typeof GET_CART_FAIL;
  payload: string;
};

export type GetCartAction =
  | GetCartRequestAction
  | GetCartSuccessAction
  | GetCartFailAction;

export const getCartsAction =
  () => async (dispatch: Dispatch<GetCartAction>) => {
    try {
      dispatch({ type: GET_CART_REQUEST });

      const { data } = await axios.get<ICart[]>('http://localhost:3003/carts');

      dispatch({
        type: GET_CART_SUCCESS,
        payload: data,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({
          type: GET_CART_FAIL,
          payload: message,
        });
      } else {
        // Handle non-Axios errors
        dispatch({
          type: GET_CART_FAIL,
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
  payload: ICart;
};

type CartAddFailAction = {
  type: typeof CART_ADD_FAIL;
  payload: string;
};

export type CartAddAction =
  | CartAddRequestAction
  | CartAddSuccessAction
  | CartAddFailAction;

export const addToCartAction =
  (product: IProduct) => async (dispatch: Dispatch<CartAddAction>) => {
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

      const { data } = await axios.post<ICart>(
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
