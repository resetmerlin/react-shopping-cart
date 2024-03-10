/* eslint-disable import/prefer-default-export */
// Assuming you have axios installed
import axios from 'axios';
import { Dispatch } from 'redux'; // Use Redux's Dispatch type
import {
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAIL,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_FAIL,
} from '../constants';
import { IProduct } from '../types';

type ProductsRequestAction = {
  type: typeof PRODUCTS_REQUEST;
};

type ProductsSuccessAction = {
  type: typeof PRODUCTS_SUCCESS;
  payload: IProduct[];
};

type ProductsFailAction = {
  type: typeof PRODUCTS_FAIL;
  payload: string;
};

export type ProductsAction =
  | ProductsRequestAction
  | ProductsSuccessAction
  | ProductsFailAction;

export const getProductsAction =
  () => async (dispatch: Dispatch<ProductsAction>) => {
    try {
      dispatch({ type: PRODUCTS_REQUEST });

      const { data } = await axios.get<IProduct[]>(
        'http://localhost:3003/products'
      );

      dispatch({
        type: PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({
          type: PRODUCTS_FAIL,
          payload: message,
        });
      } else {
        dispatch({
          type: PRODUCTS_FAIL,
          payload: 'An unknown error occurred',
        });
      }
    }
  };

type ProductRequestAction = {
  type: typeof PRODUCT_REQUEST;
};

type ProductSuccessAction = {
  type: typeof PRODUCT_SUCCESS;
  payload: IProduct;
};

type ProductFailAction = {
  type: typeof PRODUCT_FAIL;
  payload: string;
};

export type ProductAction =
  | ProductRequestAction
  | ProductSuccessAction
  | ProductFailAction;

export const productAction =
  (id: number) => async (dispatch: Dispatch<ProductAction>) => {
    try {
      dispatch({ type: PRODUCT_REQUEST });

      const { data } = await axios.get<IProduct>(
        `http://localhost:3003/products/${id}`
      );

      dispatch({
        type: PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({
          type: PRODUCT_FAIL,
          payload: message,
        });
      } else {
        dispatch({
          type: PRODUCT_FAIL,
          payload: 'An unknown error occurred',
        });
      }
    }
  };
