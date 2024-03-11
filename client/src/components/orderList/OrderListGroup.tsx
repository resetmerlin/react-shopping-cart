import { PropsWithChildren } from 'react';
import styles from './OrderList.module.scss';

export default function OrderListGroup({ children }: PropsWithChildren) {
  return <div className={styles.order__group}>{children}</div>;
}
