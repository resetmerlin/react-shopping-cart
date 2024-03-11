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
import { IOrder, IOrderDetail, IStaticOrderDetail } from '../types';

type OrdersRequestAction = {
  type: typeof ORDERS_REQUEST;
};

type OrdersSuccessAction = {
  type: typeof ORDERS_SUCCESS;
  payload: IOrder[];
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

      const { data } = await axios.get<IOrder[]>(
        'http://localhost:3003/orders'
      );

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

type AddOrdersRequestAction = {
  type: typeof ORDER_ADD_REQUEST;
};

type AddOrdersSuccessAction = {
  type: typeof ORDER_ADD_SUCCESS;
  payload: IOrderDetail;
};

type AddOrdersFailAction = {
  type: typeof ORDER_ADD_FAIL;
  payload: string;
};

export type AddOrdersAction =
  | AddOrdersRequestAction
  | AddOrdersSuccessAction
  | AddOrdersFailAction;

export const addOrdersAction =
  (orderDetails: IOrderDetail[]) =>
  async (dispatch: Dispatch<AddOrdersAction>) => {
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

      const { data } = await axios.post<IOrderDetail>(
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
  payload: IStaticOrderDetail[];
};

export const addStaticOrdersAction =
  (orderDetails: IStaticOrderDetail[]) =>
  async (dispatch: Dispatch<AddStaticOrdersAction>) => {
    dispatch({
      type: STATIC_ORDER_ADD,
      payload: orderDetails,
    });
  };
