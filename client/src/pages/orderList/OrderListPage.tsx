import { Key } from 'react';
import {
  Header,
  Loader,
  OrderList,
  OrderListHeader,
  OrderListItem,
} from '../../components';
import useOrderListPage from './OrderListPage.hook';

/**
 *  ## Responsible for conducting business logic of the orderList page
 *
 * - Renders given component
 * - Add dependencies from react, react, components, actions, hooks
 * - Fetch orders if there is no orders data
 */
export default function OrderListPage() {
  const { state } = useOrderListPage();
  return (
    <div className="root">
      <Header />
      <OrderList.Section>
        {state.loading ? (
          <Loader />
        ) : (
          state.orders?.map((order) => {
            return (
              <OrderList.Group key={order?.id}>
                <OrderListHeader id={order?.id} />
                {order?.orderDetails?.map(
                  (orderDetail: {
                    id: Key | null | undefined;
                    imageUrl: string;
                    name: string;
                    price: number;
                    quantity: number;
                  }) => {
                    return (
                      <OrderListItem
                        key={orderDetail.id}
                        imageUrl={orderDetail.imageUrl}
                        name={orderDetail.name}
                        price={orderDetail.price}
                        quantity={orderDetail.quantity}
                      />
                    );
                  }
                )}
              </OrderList.Group>
            );
          })
        )}
      </OrderList.Section>
    </div>
  );
}
