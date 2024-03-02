import { PropsWithChildren } from 'react';
import styles from './Cart.module.scss';

export default function CartSection({ children }: PropsWithChildren) {
  return <section className={styles.cart__section}>{children}</section>;
}
