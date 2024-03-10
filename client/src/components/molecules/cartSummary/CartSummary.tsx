import { Button, HightlightText } from '../../atom';
import styles from './CartSummary.module.scss';

type IProps = {
  cartPrice: number;
  cartsLength: number;
  addToOrder: () => void;
};
export default function CartSummary({
  cartPrice,
  cartsLength,
  addToOrder,
}: IProps) {
  return (
    <>
      <div className={styles.cart__right__group__top}>
        <h3 className={styles.cart__title}>결제예상금액</h3>
      </div>
      <hr className="divide-line-thin" />
      <div className="cart-right-section__bottom">
        <div className="flex justify-between p-20 mt-20">
          <HightlightText>결제예상금액</HightlightText>
          <HightlightText>{cartPrice}원</HightlightText>
        </div>
        <div className="flex-center mt-30 mx-10">
          <Button
            className="flex-center"
            type="button"
            purpose="primary"
            onClick={addToOrder}
          >
            주문하기({cartsLength}개)
          </Button>
        </div>
      </div>
    </>
  );
}
