/* eslint-disable jsx-a11y/label-has-associated-control */
import { Button, Input } from '..';
import styles from './Cart.module.scss';

type IProps = {
  deleteItems: () => void;
  cartsLength: number;
};
export default function CartStatusHeader({ deleteItems, cartsLength }: IProps) {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className={styles.checkbox__container}>
          <Input
            className="checkbox"
            name="checkbox"
            id="checkbox"
            type="checkbox"
          />
          <label className={styles.checkbox__label} htmlFor="checkbox">
            선택해제
          </label>
        </div>
        <Button
          purpose="delete"
          type="button"
          onClick={deleteItems}
          size="medium"
        >
          상품삭제
        </Button>
      </div>{' '}
      <h3 className="cart-title">든든배송 상품({cartsLength}개)</h3>
    </>
  );
}
