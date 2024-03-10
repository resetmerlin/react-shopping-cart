import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  addStaticOrdersAction,
  cartDeleteAction,
  cartsAction,
} from '../../actions';
import {
  Cart,
  CartItem,
  CartStatusHeader,
  CartSummary,
  GroupHeader,
  Header,
  Loader,
} from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { IOrderDetail } from '../../types';

export default function CartPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [checkedIdLists, setCheckedIdLists] = useState<number[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const cartsInfo = useAppSelector((state) => state.cartsInfo);
  const cartDeleteInfo = useAppSelector((state) => state.cartDeleteInfo);
  const { loading, carts } = cartsInfo;
  const { loading: cartDeleteLoading, carts: cartDeleted } = cartDeleteInfo;

  /** Select cart item and store only id */
  const selectItems = useCallback(
    (newId: number) => {
      // If id already exists, delete the value from array
      if (checkedIdLists.includes(newId)) {
        const filteredCheckedId = [...checkedIdLists].filter(
          (item) => item !== newId
        );
        setCheckedIdLists(filteredCheckedId);
      } else setCheckedIdLists([...checkedIdLists, newId]);
    },
    [checkedIdLists]
  );

  /** Delete checked items */
  const deleteItems = useCallback(() => {
    // if user checked more than one item dispatch delete cart action
    if (checkedIdLists.length) {
      [...checkedIdLists].forEach((id) => dispatch(cartDeleteAction(id)));
      setCheckedIdLists([]);
    }
  }, [dispatch, checkedIdLists]);

  /** Filter carts that has id on checkbox lists */
  let checkedItems = [...carts]
    .filter((cart) => checkedIdLists.includes(cart.id))
    .map((cart) => ({
      ...cart,
      product: cart.product as IOrderDetail, // Cast product to OrderDetail
    }));

  const selectAllItems = (e: React.FormEvent<HTMLInputElement>) => {};

  const updateItemPrice = (id: number, price: number, quantity: number) => {
    // check if the selected item is checked if not, return it
    if (!checkedIdLists.includes(id)) return;

    /** Updated carts data with new price */
    checkedItems = checkedItems.map((cart) => {
      if (cart.id === id) {
        return {
          id: cart.id,
          product: {
            ...cart.product,
            price,
            quantity,
          } as IOrderDetail,
        };
      }
      return cart;
    });

    const updatedTotalPrice = [...checkedItems].reduce((prev, curr) => {
      let prevValue = prev;
      prevValue += curr.product.price;
      return prevValue;
    }, 0);

    setTotalPrice(updatedTotalPrice);
  };

  const addToOrder = () => {
    const orderDetails = checkedItems.map((item) => {
      return {
        key: item.id,
        id: item.product.id,
        imageUrl: item.product.imageUrl,
        name: item.product.name,
        price: item.product.price,
        quantity: item.product.quantity,
      };
    });

    dispatch(addStaticOrdersAction(orderDetails));
    navigate('/order');
  };

  // if there is no checked set total price to 0
  useEffect(() => {
    if (!checkedIdLists.length) {
      setTotalPrice(0);
    }
  }, [checkedIdLists.length]);

  // If cart is deleted get cart items
  useEffect(() => {
    if (!cartDeleteLoading && cartDeleted) {
      dispatch(cartsAction());
    }
  }, [cartDeleteLoading, cartDeleted, dispatch]);

  // If user enters cart page first time, get cart items
  useEffect(() => {
    dispatch(cartsAction());
  }, [dispatch]);

  return (
    <div className="root">
      <Header />
      <Cart.Section>
        <GroupHeader>장바구니</GroupHeader>
        <div className="flex">
          <Cart.Left>
            <CartStatusHeader
              deleteItems={deleteItems}
              selectAllItems={selectAllItems}
              cartsLength={checkedIdLists?.length}
            />
            <hr className="divide-line-gray mt-10" />

            {loading ? (
              <Loader />
            ) : (
              carts?.map((cart) => (
                <div key={cart?.id}>
                  <CartItem
                    id={cart?.id}
                    name={cart?.product.name}
                    price={cart?.product.price}
                    imageUrl={cart?.product.imageUrl}
                    selectItems={selectItems}
                    updateItemPrice={updateItemPrice}
                  />
                  <hr className="divide-line-thin mt-10" />
                </div>
              ))
            )}
          </Cart.Left>
          <Cart.Right>
            <CartSummary
              cartPrice={totalPrice}
              cartsLength={checkedIdLists?.length}
              addToOrder={addToOrder}
            />
          </Cart.Right>
        </div>
      </Cart.Section>
    </div>
  );
}
