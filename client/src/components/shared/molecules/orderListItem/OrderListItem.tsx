import { Button } from '../../atom';
import styles from './OrderListItem.module.scss';

type IProps = {
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
};
export default function OrderListItem({
  name,
  price,
  quantity,
  imageUrl,
}: IProps) {
  return (
    <div className={styles.order__list__item}>
      <div className="flex gap-15 mt-10">
        <img className="w-144 h-144" src={imageUrl} alt={name} />
        <div className="flex-col gap-15">
          <span className={styles.order__name}>PET보틀-정사각(420ml)</span>
          <span className={styles.order__info}>
            {price}원 / 수량: {quantity}개
          </span>
        </div>
      </div>
      <Button
        className="flex-center self-start"
        purpose="primary"
        type="button"
        size="small"
      >
        장바구니
      </Button>
    </div>
  );
}
