import {
  GroupHeader,
  Header,
  Order,
  OrderItem,
  OrderSummary,
} from '../../components';
import useOrderPage from './OrderPage.hook';

/**
 *  ## Responsible for conducting business logic of the order page
 *
 * - Renders given component
 * - Add dependencies from react, react router dom, components, actions, hooks
 * - Get static orders data; static means that there is no api call
 */
export default function OrderPage() {
  const { state, action } = useOrderPage();

  return (
    <div className="root">
      <Header />
      <Order.Section>
        <GroupHeader>주문/결제</GroupHeader>
        <div className="flex">
          <Order.Left>
            <h3 className="order-title">
              주문 상품({state.staticOrders?.length}건)
            </h3>
            <hr className="divide-line-gray mt-10" />

            {state.staticOrders?.map((order) => {
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
              price={state.totalPrice}
              addToOrderLists={action.addToOrderLists}
            />
          </Order.Right>
        </div>
      </Order.Section>
    </div>
  );
}
