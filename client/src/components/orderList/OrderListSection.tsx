import { PropsWithChildren } from 'react';
import styles from './OrderList.module.scss';

export default function OrderListSection({ children }: PropsWithChildren) {
  return <section className={styles.order__section}>{children}</section>;
}
