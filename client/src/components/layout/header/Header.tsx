import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { Button } from '../../atom';

export default function Header() {
  return (
    <nav className={`flex justify-around ${styles.nav}`}>
      <Link to="/" className="flex-center">
        <h1 className={styles.nav__title}>CLEAN CODE SHOP</h1>
      </Link>
      <div className="flex gap-15">
        <Link to="/cart" className="flex-center">
          <Button type="button" purpose="nav">
            장바구니
          </Button>
        </Link>{' '}
        <Link to="/order" className="flex-center">
          <Button type="button" purpose="nav">
            주문목록
          </Button>
        </Link>
      </div>
    </nav>
  );
}
