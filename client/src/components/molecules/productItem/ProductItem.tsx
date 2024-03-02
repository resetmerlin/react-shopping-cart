import { Link } from 'react-router-dom';
import styles from './ProductItem.module.scss';

export default function ProductItem() {
  return (
    <Link to="/product">
      <img src="./images/product.png" alt="PET보틀-정사각(420ml)" />
      <div className="flex justify-between w-280 p-5">
        <div className={styles.productItem__info}>
          <span className={styles.productItem__info__name}>
            PET보틀-정사각(420ml)
          </span>
          <span className={styles.productItem__info__price}>43,000원</span>
        </div>
        <img src="./svgs/cart.svg" alt="장바구니" />
      </div>
    </Link>
  );
}
