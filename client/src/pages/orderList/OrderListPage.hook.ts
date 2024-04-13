import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getOrdersAction } from '../../actions';

const useOrderListPage = () => {
  const dispatch = useAppDispatch();
  const ordersInfo = useAppSelector((state) => state.ordersInfo);
  const { loading, orders } = ordersInfo;

  useEffect(() => {
    if (!orders.length) {
      dispatch(getOrdersAction());
    }
  }, [dispatch, orders.length]);

  return {
    state: {
      loading,
      orders,
    },
  };
};

export default useOrderListPage;
