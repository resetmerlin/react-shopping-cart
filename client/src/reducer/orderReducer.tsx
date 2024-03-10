/* eslint-disable @typescript-eslint/default-param-last */
import {
  ORDERS_REQUEST,
  ORDERS_SUCCESS,
  ORDERS_FAIL,
  ORDER_ADD_REQUEST,
  ORDER_ADD_SUCCESS,
  ORDER_ADD_FAIL,
  ORDER_DETAILS_ADD,
} from '../constants';
import {
  OrdersAction,
  AddOrderAction,
  AddOrderDetailsAction,
} from '../actions';
import { Order, OrderDetail } from '../types';

type OrdersState = {
  orders: Order[];
  loading: boolean;
  error?: string | null;
};

const OrdersInitialState: OrdersState = {
  orders: [],
  loading: true,
  error: null,
};

export const ordersReducers = (
  state: OrdersState = OrdersInitialState,
  action: OrdersAction
) => {
  switch (action.type) {
    case ORDERS_REQUEST:
      return { ...state, loding: true, error: null };

    case ORDERS_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
        error: null,
      };

    case ORDERS_FAIL:
      return { loading: false, error: action.payload, orders: [] };

    default:
      return state;
  }
};
type AddOrderState = {
  orderDetails: OrderDetail | object;
  loading: boolean;
  error?: string | null;
};

const AddOrderInitialState: AddOrderState = {
  orderDetails: {},
  loading: true,
  error: null,
};
export const addOrderReducers = (
  state: AddOrderState = AddOrderInitialState,
  action: AddOrderAction
) => {
  switch (action.type) {
    case ORDER_ADD_REQUEST:
      return { ...state, loding: true, error: null };

    case ORDER_ADD_SUCCESS:
      return {
        loading: false,
        orderDetails: action.payload,
        error: null,
      };

    case ORDER_ADD_FAIL:
      return { loading: false, error: action.payload, orderDetails: {} };

    default:
      return state;
  }
};
type AddOrderDetailState = {
  orders: OrderDetail[];
  loading: boolean;
  error?: string | null;
};

const AddOrderDetailsInitialState: AddOrderDetailState = {
  orders: [],
  loading: true,
  error: null,
};

export const addOrderDetailsReducers = (
  state: AddOrderDetailState = AddOrderDetailsInitialState,
  action: AddOrderDetailsAction
) => {
  switch (action.type) {
    case ORDER_DETAILS_ADD:
      return {
        orders: action.payload,
      };

    default:
      return state;
  }
};
