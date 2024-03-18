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

/**
 *  ## Responsible for conducting business logic of the orderList page
 *
 * - Renders given component
 * - Add dependencies from react, react, components, actions, hooks
 * - Fetch orders if there is no orders data
 */
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
