import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <nav className={`flex justify-around ${styles.nav}`}>
      <Link to="/" className="flex-center">
        <h1 className={styles.nav__title}>CLEAN CODE SHOP</h1>
      </Link>
      <div className="flex gap-15">
        <button type="button" className={styles.nav__button}>
          장바구니
        </button>
        <button type="button" className={styles.nav__button}>
          주문목록
        </button>
      </div>
    </nav>
  );
}
