import axios from 'axios';
import { Dispatch } from 'redux';
import { ORDERS_REQUEST, ORDERS_SUCCESS, ORDERS_FAIL } from '../constants';
import { Order } from '../types';

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
