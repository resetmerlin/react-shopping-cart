import { PropsWithChildren } from 'react';
import styles from './Product.module.scss';

export default function ProductSection({ children }: PropsWithChildren) {
  return <div className={styles.product__detail__container}>{children}</div>;
}
