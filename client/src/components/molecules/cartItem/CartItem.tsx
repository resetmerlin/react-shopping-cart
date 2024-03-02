import styles from './CartItem.module.scss';

export default function CartItem() {
  return (
    <div className={styles.cart__container}>
      <div className="flex gap-15 mt-10">
        {/* Need to make into Atom */}
        <input className="checkbox" name="checkbox" type="checkbox" checked />
        <img
          className="w-144 h-144"
          src="./images/product.png"
          alt="PET보틀-정사각(420ml)"
        />
        <span className={styles.cart__name}>PET보틀-정사각(420ml)</span>
      </div>
      <div className="flex-col-center justify-end gap-15">
        <img className="cart-trash-svg" src="./svgs/trash.svg" alt="삭제" />
        <div className={styles.number__input__container}>
          <input type="number" className={styles.number__input} value="1" />
          <div>
            {/* Need to make into Atom */}
            <button className={styles.number__input__button} type="button">
              ▲
            </button>
            <button className={styles.number__input__button} type="button">
              ▼
            </button>
          </div>
        </div>
        <span className={styles.cart__price}>123,456원</span>
      </div>
    </div>
  );
}
