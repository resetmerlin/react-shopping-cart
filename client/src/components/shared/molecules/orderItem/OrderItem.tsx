import styles from './OrderItem.module.scss';

type IProps = {
  name: string;
  imageUrl: string;
  quantity: number;
};
export default function OrderItem({ name, imageUrl, quantity }: IProps) {
  return (
    <div className={styles.order__container}>
      <div className="flex gap-15 mt-10">
        <img className="w-144 h-144" src={imageUrl} alt={name} />
        <div className="flex-col gap-15">
          <span className={styles.order__name}>{name}</span>
          <span>수량: {quantity}</span>
        </div>
      </div>
    </div>
  );
}
