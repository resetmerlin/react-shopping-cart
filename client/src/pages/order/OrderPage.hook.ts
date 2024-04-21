import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addOrdersAction } from '../../redux';

const useOrderPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const addStaticOrderInfo = useAppSelector(
    (state) => state.addStaticOrderInfo
  );
  const { orders: staticOrders } = addStaticOrderInfo;

  const totalPrice = [...staticOrders]?.reduce((prev, curr) => {
    const value = prev + curr.price;
    return value;
  }, 0);

  const addToOrderLists = () => {
    const orderDetails = [...staticOrders].map((item) => {
      return {
        id: item.id,
        imageUrl: item.imageUrl,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      };
    });

    dispatch(addOrdersAction(orderDetails));
    navigate('/orderList');
  };

  return {
    state: {
      staticOrders,
      totalPrice,
    },
    action: {
      addToOrderLists,
    },
  };
};

export default useOrderPage;
