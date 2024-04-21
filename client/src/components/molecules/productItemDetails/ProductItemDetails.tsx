import { NavigateFunction } from 'react-router-dom';
import { AppDispatch } from '../../../redux/store';
import { Button } from '../../atom';
import styles from './ProductItemDetails.module.scss';

type IProps = {
  name: string;
  price: number;
  id: number;
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

export default function ProductItemDetails({
  name,
  price,
  imageUrl,
  id,
  addToCart,
  dispatch,
  navigate,
}: IProps) {
  return (
    <div className="flex-col-center w-520">
      <img className="w-480 h-480 mb-10" src={imageUrl} alt={name} />
      <div className={styles.product__detail__info}>
        <span className={styles.product__detail__info__name}>{name}</span>
        <hr className="divide-line-gray my-20" />
        <div className="flex justify-between">
          <span>금액</span>
          <span className={styles.product__detail__info__price}>{price}</span>
        </div>
      </div>

      <Button
        className="flex-center mt-20"
        type="submit"
        purpose="product"
        size="medium"
        onClick={() => addToCart(name, id, price, imageUrl, navigate, dispatch)}
      >
        장바구니
      </Button>
    </div>
  );
}
