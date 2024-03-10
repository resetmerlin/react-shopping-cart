import {
  GroupHeader,
  Header,
  Order,
  OrderItem,
  OrderSummary,
} from '../../components';
import { useAppSelector } from '../../hooks';

export default function OrderPage() {
  const addOrderDetails = useAppSelector((state) => state.ordersInfo);
  const { orders } = addOrderDetails;

  return (
    <div className="root">
      <Header />
      <Order.Section>
        <GroupHeader>주문 목록</GroupHeader>
        <div className="flex">
          <Order.Left>
            <h3 className="order-title">주문 상품(3건)</h3>
            <hr className="divide-line-gray mt-10" />

            {orders?.map((order) => {
              return (
                <div key={order.key}>
                  <OrderItem />
                  <hr className="divide-line-thin mt-10" />
                </div>
              );
            })}
          </Order.Left>
          <Order.Right>
            <OrderSummary />
          </Order.Right>
        </div>
      </Order.Section>
    </div>
  );
}
