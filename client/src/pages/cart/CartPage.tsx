import {
  Cart,
  CartItem,
  CartStatusHeader,
  CartSummary,
  GroupHeader,
  Header,
  Loader,
} from '../../components';
import useCartPage from './CartPage.hook';

export default function CartPage() {
  const { state, action } = useCartPage();

  return (
    <div className="root">
      <Header />
      <Cart.Section>
        <GroupHeader>장바구니</GroupHeader>
        <div className="flex">
          <Cart.Left>
            <CartStatusHeader
              deleteItems={action.deleteItems}
              cartsLength={state.checkedIdLists?.length}
            />
            <hr className="divide-line-gray mt-10" />

            {state.loading ? (
              <Loader />
            ) : (
              state.carts?.map((cart) => (
                <div key={cart?.id}>
                  <CartItem
                    id={cart?.id}
                    name={cart?.product.name}
                    price={cart?.product.price}
                    imageUrl={cart?.product.imageUrl}
                    selectItems={action.selectItems}
                    updateItemPrice={action.updateItemPrice}
                  />
                  <hr className="divide-line-thin mt-10" />
                </div>
              ))
            )}
          </Cart.Left>
          <Cart.Right>
            <CartSummary
              cartPrice={state.totalPrice}
              cartsLength={state.checkedIdLists?.length}
              addToOrder={action.addToOrder}
            />
          </Cart.Right>
        </div>
      </Cart.Section>
    </div>
  );
}
