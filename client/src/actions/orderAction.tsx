import axios from 'axios';
import { Dispatch } from 'redux';
import {
  ORDERS_REQUEST,
  ORDERS_SUCCESS,
  ORDERS_FAIL,
  ORDER_ADD_REQUEST,
  ORDER_ADD_SUCCESS,
  ORDER_ADD_FAIL,
  STATIC_ORDER_ADD,
} from '../constants';
import { Order, OrderDetail } from '../types';

type OrdersRequestAction = {
  type: typeof ORDERS_REQUEST;
};

type OrdersSuccessAction = {
  type: typeof ORDERS_SUCCESS;
  payload: Order[];
};

type OrdersFailAction = {
  type: typeof ORDERS_FAIL;
  payload: string;
};

export type OrdersAction =
  | OrdersRequestAction
  | OrdersSuccessAction
  | OrdersFailAction;

export const getOrdersAction =
  () => async (dispatch: Dispatch<OrdersAction>) => {
    try {
      dispatch({ type: ORDERS_REQUEST });

      const { data } = await axios.get<Order[]>('http://localhost:3003/orders');

      dispatch({
        type: ORDERS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({
          type: ORDERS_FAIL,
          payload: message,
        });
      } else {
        // Handle non-Axios errors
        dispatch({
          type: ORDERS_FAIL,
          payload: 'An unknown error occurred',
        });
      }
    }
  };

type AddOrderRequestAction = {
  type: typeof ORDER_ADD_REQUEST;
};

type AddOrderSuccessAction = {
  type: typeof ORDER_ADD_SUCCESS;
  payload: OrderDetail;
};

type AddOrderFailAction = {
  type: typeof ORDER_ADD_FAIL;
  payload: string;
};

export type AddOrderAction =
  | AddOrderRequestAction
  | AddOrderSuccessAction
  | AddOrderFailAction;

export const addOrderAction =
  (orderDetails: OrderDetail[]) =>
  async (dispatch: Dispatch<AddOrderAction>) => {
    try {
      dispatch({ type: ORDER_ADD_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const body = {
        orderDetails,
      };

      const { data } = await axios.post<OrderDetail>(
        'http://localhost:3003/orders',
        body,
        config
      );

      dispatch({
        type: ORDER_ADD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({
          type: ORDER_ADD_FAIL,
          payload: message,
        });
      } else {
        // Handle non-Axios errors
        dispatch({
          type: ORDER_ADD_FAIL,
          payload: 'An unknown error occurred',
        });
      }
    }
  };

export type AddStaticOrdersAction = {
  type: typeof STATIC_ORDER_ADD;
  payload: OrderDetail[];
};

export const addStaticOrdersAction =
  (orderDetails: OrderDetail[]) =>
  async (dispatch: Dispatch<AddStaticOrdersAction>) => {
    dispatch({
      type: STATIC_ORDER_ADD,
      payload: orderDetails,
    });
  };
