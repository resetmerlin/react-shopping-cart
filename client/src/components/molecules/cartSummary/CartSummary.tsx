import styles from './CartSummary.module.scss';

export default function CartSummary() {
  return (
    <>
      <div className={styles.cart__right__group__top}>
        <h3 className={styles.cart__title}>결제예상금액</h3>
      </div>
      <hr className="divide-line-thin" />
      <div className="cart-right-section__bottom">
        <div className="flex justify-between p-20 mt-20">
          <span className="highlight-text">결제예상금액</span>
          <span className="highlight-text">21,800원</span>
        </div>
        <div className="flex-center mt-30 mx-10">
          {/* Need to make into Atom */}
          <button className="primary-button flex-center" type="button">
            주문하기(3개)
          </button>
        </div>
      </div>
    </>
  );
}
