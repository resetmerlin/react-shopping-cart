import { useEffect, useState } from 'react';
import { Button, Input } from '../../atom';
import styles from './CartItem.module.scss';

type IProps = {
  name: string;
  price: number;
  id: number;
  imageUrl: string;
  selectItems: (id: number) => void;
  updateItemPrice: (id: number, price: number, quantity: number) => void;
};

export default function CartItem({
  name,
  price,
  imageUrl,
  selectItems,
  id,
  updateItemPrice,
}: IProps) {
  const [qty, setQty] = useState(1);

  const increaseQty = () => {
    setQty(qty + 1);
  };

  const decreaseQty = () => {
    if (qty === 1) return;
    setQty(qty - 1);
  };

  const priceWithQty = price * qty;

  // If priceWithQty value changes call callback function to update the price
  useEffect(() => {
    if (priceWithQty) {
      updateItemPrice(id, priceWithQty, qty);
    }
  }, [id, priceWithQty, qty, updateItemPrice]);

  return (
    <div className={styles.cart__container}>
      <div className="flex gap-15 mt-10">
        <Input
          className="checkbox"
          name="checkbox"
          type="checkbox"
          onClick={() => selectItems(id)}
        />
        <img className="w-144 h-144" src={imageUrl} alt={name} />
        <span className={styles.cart__name}>{name}</span>
      </div>
      <div className="flex-col-center justify-end gap-15">
        <img className="cart-trash-svg" src="./svgs/trash.svg" alt="삭제" />
        <div className={styles.number__input__container}>
          <Input type="number" className={styles.number__input} value={qty} />
          <div>
            <Button purpose="number" type="button" onClick={increaseQty}>
              ▲
            </Button>
            <Button purpose="number" type="button" onClick={decreaseQty}>
              ▼
            </Button>
          </div>
        </div>
        <span className={styles.cart__price}>{priceWithQty}</span>
      </div>
    </div>
  );
}
