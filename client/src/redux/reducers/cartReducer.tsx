/* eslint-disable @typescript-eslint/default-param-last */
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
import { GetCartAction, CartAddAction, CartDeleteAction } from '../actions';
import { ICart, GetCartResponse } from '../types';

type GetCartsState = {
  carts: ICart[];
  loading: boolean;
  error?: string | null;
};

const getCartsInitialState: GetCartsState = {
  carts: [],
  loading: true,
  error: null,
};

export const cartsReducers = (
  state: GetCartsState = getCartsInitialState,
  action: GetCartAction
) => {
  switch (action.type) {
    case GET_CART_REQUEST:
      return { ...state, loding: true, error: null };

    case GET_CART_SUCCESS:
      return {
        loading: false,
        carts: action.payload,
        error: null,
      };

    case GET_CART_FAIL:
      return { loading: false, error: action.payload, carts: [] };

    default:
      return state;
  }
};

type CartAddedState = {
  carts: GetCartResponse[];
  loading: boolean;
  error?: string | null;
};

const cartAddInitialState = {
  loading: true,
  carts: [],
};

export const cartAddReducers = (
  state: CartAddedState = cartAddInitialState,
  action: CartAddAction
) => {
  switch (action.type) {
    case CART_ADD_REQUEST:
      return { ...state, loding: true, error: null };

    case CART_ADD_SUCCESS:
      return {
        loading: false,
        carts: action.payload,
        error: null,
      };

    case CART_ADD_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
const cartDeleteInitialState = {
  carts: false,
  loading: true,
};

export const cartDeleteReducers = (
  state = cartDeleteInitialState,
  action: CartDeleteAction
) => {
  switch (action.type) {
    case CART_DELETE_REQUEST:
      return { ...state, loading: true, error: null };

    case CART_DELETE_SUCCESS:
      return {
        loading: false,
        carts: action.payload,
        error: null,
      };

    case CART_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
