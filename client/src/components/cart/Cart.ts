import CartItem from './CartItem';
import CartLeftGroup from './CartLeftGroup';
import CartRightGroup from './CartRightGroup';
import CartSection from './CartSection';
import CartStatusHeader from './CartStatusHeader';
import CartSummary from './CartSummary';

const Cart = {
  Section: CartSection,
  Right: CartRightGroup,
  Left: CartLeftGroup,
  Item: CartItem,
  Header: CartStatusHeader,
  Summary: CartSummary,
};

export default Cart;
