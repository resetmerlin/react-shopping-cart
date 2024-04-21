import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { IStaticOrderDetail } from '../../types';
import {
  addStaticOrdersAction,
  cartDeleteAction,
  getCartsAction,
} from '../../redux';

const useCartPage = () => {
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
      product: cart.product as IStaticOrderDetail, // Cast product to OrderDetail
    }));

  const updateItemPrice = (id: number, price: number, quantity: number) => {
    // check if the selected item is checked if not, return it
    if (![...checkedIdLists].includes(id)) return;

    // Updated carts data with new price with quantity
    checkedItems = [...checkedItems].map((cart) => {
      if (cart.id === id) {
        return {
          id: cart.id,
          product: {
            ...cart.product,
            price,
            quantity,
          } as IStaticOrderDetail,
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
    const orderDetails = [...checkedItems].map((item) => {
      return {
        key: item.id,
        id: item.product.id,
        imageUrl: item.product.imageUrl,
        name: item.product.name,
        price: item.product.price,
        quantity: item.product.quantity,
      } as IStaticOrderDetail;
    });

    dispatch(addStaticOrdersAction(orderDetails));
    navigate('/order');
  };

  // if there is no checked lists, set total price to 0
  useEffect(() => {
    if (!checkedIdLists.length) {
      setTotalPrice(0);
    }
  }, [checkedIdLists.length]);

  // If cart data is deleted, update cart items
  useEffect(() => {
    if (!cartDeleteLoading && cartDeleted) {
      dispatch(getCartsAction());
    }
  }, [cartDeleteLoading, cartDeleted, dispatch]);

  // If user enters cart page first time, get cart items
  useEffect(() => {
    dispatch(getCartsAction());
  }, [dispatch]);

  return {
    state: {
      checkedIdLists,
      loading,
      carts,
      totalPrice,
    },
    action: {
      selectItems,
      updateItemPrice,
      addToOrder,
      deleteItems,
    },
  };
};

export default useCartPage;
