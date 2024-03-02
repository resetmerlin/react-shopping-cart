import { PropsWithChildren } from 'react';
import styles from './Cart.module.scss';

export default function CartLeftGroup({ children }: PropsWithChildren) {
  return <div className={styles.cart__left__group}>{children}</div>;
}
