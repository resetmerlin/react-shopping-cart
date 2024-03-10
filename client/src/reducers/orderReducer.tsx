/* eslint-disable @typescript-eslint/default-param-last */
import {
  ORDERS_REQUEST,
  ORDERS_SUCCESS,
  ORDERS_FAIL,
  ORDER_ADD_REQUEST,
  ORDER_ADD_SUCCESS,
  ORDER_ADD_FAIL,
  STATIC_ORDER_ADD,
} from '../constants';
import {
  OrdersAction,
  AddStaticOrdersAction,
  AddOrdersAction,
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
type OrderAddedState = {
  orderDetails: OrderDetail | object;
  loading: boolean;
  error?: string | null;
};

const OrderAddedInitialState: OrderAddedState = {
  orderDetails: {},
  loading: true,
  error: null,
};
export const orderAddedReducers = (
  state: OrderAddedState = OrderAddedInitialState,
  action: AddOrdersAction
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
type AddStaticOrderState = {
  orders: OrderDetail[];
  loading: boolean;
  error?: string | null;
};

const AddStaticOrderInitialState: AddStaticOrderState = {
  orders: [],
  loading: true,
  error: null,
};

export const addStaticOrdersReducers = (
  state: AddStaticOrderState = AddStaticOrderInitialState,
  action: AddStaticOrdersAction
) => {
  switch (action.type) {
    case STATIC_ORDER_ADD:
      return {
        orders: action.payload,
      };

    default:
      return state;
  }
};
