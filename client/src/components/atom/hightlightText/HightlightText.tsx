import { PropsWithChildren } from 'react';
import styles from './HightlightText.module.scss';

export default function HightlightText({ children }: PropsWithChildren) {
  return <span className={styles.highlight__text}>{children}</span>;
}
