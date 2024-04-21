import styles from './OrderList.module.scss';

type IProps = {
  id: number;
};
export default function OrderListHeader({ id }: IProps) {
  return (
    <div className={styles.order__list__header}>
      <span>주문번호: {id}</span>
      <span>상세보기 {'>'}</span>
    </div>
  );
}
