import { PropsWithChildren } from 'react';
import styles from './Cart.module.scss';

export default function CartRightGroup({ children }: PropsWithChildren) {
  return <div className={styles.cart__right__group}>{children}</div>;
}
