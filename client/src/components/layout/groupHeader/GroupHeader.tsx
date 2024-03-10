import { PropsWithChildren } from 'react';
import styles from './GroupHeader.module.scss';

export default function GroupHeader({ children }: PropsWithChildren) {
  return (
    <header className="flex-col-center mt-20">
      <h2 className={styles.group__header__title}>{children}</h2>
      <hr className="divide-line mt-20" />
    </header>
  );
}
