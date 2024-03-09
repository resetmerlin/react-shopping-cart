/* eslint-disable @typescript-eslint/default-param-last */
import { ORDERS_REQUEST, ORDERS_SUCCESS, ORDERS_FAIL } from '../constants';
import { OrdersAction } from '../actions';
import { Order } from '../types';

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

// eslint-disable-next-line import/prefer-default-export
export const OrdersReducers = (
  state: OrdersState = OrdersInitialState,
  action: OrdersAction
) => {
  switch (action.type) {
    case ORDERS_REQUEST:
      return { ...state, loding: true, error: null };

    case ORDERS_SUCCESS:
      return {
        loading: false,
        Orders: action.payload,
        error: null,
      };

    case ORDERS_FAIL:
      return { loading: false, error: action.payload, orders: [] };

    default:
      return state;
  }
};
