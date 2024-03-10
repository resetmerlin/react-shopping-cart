import styles from './OrderItem.module.scss';

type IProps = {
  name: string;
  price: number;
  id: number;
  imageUrl: string;
};
export default function OrderItem({ name, price, imageUrl, id }: IProps) {
  return (
    <div className={styles.order__container}>
      <div className="flex gap-15 mt-10">
        <img
          className="w-144 h-144"
          src="./assets/images/product.png"
          alt="PET보틀-정사각(420ml)"
        />
        <div className="flex-col gap-15">
          <span className={styles.order__name}>PET보틀-정사각(420ml)</span>
          <span>수량: 3</span>
        </div>
      </div>
    </div>
  );
}
