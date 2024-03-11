import { useEffect } from 'react';
import {
  Header,
  Loader,
  OrderList,
  OrderListHeader,
  OrderListItem,
} from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getOrdersAction } from '../../actions';

export default function OrderListPage() {
  const dispatch = useAppDispatch();
  const ordersInfo = useAppSelector((state) => state.ordersInfo);
  const { loading, orders } = ordersInfo;

  useEffect(() => {
    if (!orders.length) {
      dispatch(getOrdersAction());
    }
  }, [dispatch, orders.length]);

  return (
    <div className="root">
      <Header />
      <OrderList.Section>
        {loading ? (
          <Loader />
        ) : (
          orders?.map((order) => {
            return (
              <OrderList.Group key={order?.id}>
                <OrderListHeader id={order?.id} />
                {order?.orderDetails?.map((orderDetail) => {
                  return (
                    <OrderListItem
                      key={orderDetail.id}
                      imageUrl={orderDetail.imageUrl}
                      name={orderDetail.name}
                      price={orderDetail.price}
                      quantity={orderDetail.quantity}
                    />
                  );
                })}
              </OrderList.Group>
            );
          })
        )}
      </OrderList.Section>
    </div>
  );
}
