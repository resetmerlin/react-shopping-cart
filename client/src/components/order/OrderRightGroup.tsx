import { PropsWithChildren } from 'react';
import styles from './Order.module.scss';

export default function OrderRightGroup({ children }: PropsWithChildren) {
  return <section className={styles.order__right__group}>{children}</section>;
}
