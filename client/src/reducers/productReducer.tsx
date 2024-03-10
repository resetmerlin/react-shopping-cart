/* eslint-disable @typescript-eslint/default-param-last */
import {
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAIL,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_FAIL,
} from '../constants';
import { ProductAction, ProductsAction } from '../actions';
import { IProduct } from '../types';

type ProductsState = {
  products: IProduct[];
  loading: boolean;
  error?: string | null;
};

const productsInitialState: ProductsState = {
  products: [],
  loading: true,
  error: null,
};

export const productsReducers = (
  state: ProductsState = productsInitialState,
  action: ProductsAction
) => {
  switch (action.type) {
    case PRODUCTS_REQUEST:
      return { ...state, loding: true, error: null };

    case PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
        error: null,
      };

    case PRODUCTS_FAIL:
      return { loading: false, error: action.payload, products: [] };

    default:
      return state;
  }
};

type ProductState = {
  product: IProduct | object;
  loading: boolean;
  error?: string | null;
};

const productInitialState: ProductState = {
  product: {},
  loading: true,
  error: null,
};

export const productReducers = (
  state: ProductState = productInitialState,
  action: ProductAction
) => {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return { ...state, loding: true, error: null };

    case PRODUCT_SUCCESS:
      return {
        loading: false,
        product: action.payload,
        error: null,
      };

    case PRODUCT_FAIL:
      return { loading: false, error: action.payload, product: {} };

    default:
      return state;
  }
};
