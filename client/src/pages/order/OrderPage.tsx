import { useNavigate } from 'react-router-dom';
import {
  GroupHeader,
  Header,
  Order,
  OrderItem,
  OrderSummary,
} from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addOrdersAction } from '../../actions';

export default function OrderPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const addStaticOrderInfo = useAppSelector(
    (state) => state.addStaticOrderInfo
  );
  const { orders: staticOrders } = addStaticOrderInfo;

  const totalPrice = staticOrders?.reduce((prev, curr) => {
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

  return (
    <div className="root">
      <Header />
      <Order.Section>
        <GroupHeader>주문/결제</GroupHeader>
        <div className="flex">
          <Order.Left>
            <h3 className="order-title">주문 상품({staticOrders?.length}건)</h3>
            <hr className="divide-line-gray mt-10" />

            {staticOrders?.map((order) => {
              return (
                <div key={order?.key}>
                  <OrderItem
                    name={order?.name}
                    quantity={order?.quantity}
                    imageUrl={order?.imageUrl}
                  />
                  <hr className="divide-line-thin mt-10" />
                </div>
              );
            })}
          </Order.Left>
          <Order.Right>
            <OrderSummary
              price={totalPrice}
              addToOrderLists={addToOrderLists}
            />
          </Order.Right>
        </div>
      </Order.Section>
    </div>
  );
}
