import { Link, NavigateFunction } from 'react-router-dom';
import styles from './ProductItem.module.scss';
import { Button } from '../../atom';
import { AppDispatch } from '../../../redux/store';

type IProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  dispatch: AppDispatch;
  navigate: NavigateFunction;
  addToCart: (
    name: string,
    id: number,
    price: number,
    imageUrl: string,
    navigate: NavigateFunction,
    dispatch: AppDispatch
  ) => void;
};
export default function ProductItem({
  id,
  name,
  price,
  imageUrl,
  addToCart,
  dispatch,
  navigate,
}: IProps) {
  return (
    <div>
      <Link to={`/product/${id}`}>
        <img
          src={imageUrl}
          alt={name}
          className={styles.productItem__info__image}
        />
      </Link>
      <div className="flex justify-between w-280 p-5">
        <div className={styles.productItem__info}>
          <span className={styles.productItem__info__name}>{name}</span>
          <span className={styles.productItem__info__price}>{price}</span>
        </div>
        <Button
          type="button"
          purpose="delete"
          size="medium"
          onClick={() =>
            addToCart(name, id, price, imageUrl, navigate, dispatch)
          }
        >
          <img src="./svgs/cart.svg" alt="장바구니" />
        </Button>
      </div>
    </div>
  );
}
