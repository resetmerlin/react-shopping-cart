import { PropsWithChildren } from 'react';
import styles from './Order.module.scss';

export default function OrderLeftGroup({ children }: PropsWithChildren) {
  return <section className={styles.order__left__group}>{children}</section>;
}
