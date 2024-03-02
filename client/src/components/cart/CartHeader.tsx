import styles from './Cart.module.scss';

export default function CartHeader() {
  return (
    <header className="flex-col-center mt-20">
      <h2 className={styles.cart__section__title}>장바구니</h2>
      <hr className="divide-line mt-20" />
    </header>
  );
}
