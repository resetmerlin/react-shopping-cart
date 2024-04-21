import OrderItem from './OrderItem';
import OrderLeftGroup from './OrderLeftGroup';
import OrderRightGroup from './OrderRightGroup';
import OrderSection from './OrderSection';
import OrderSummary from './OrderSummary';

const Order = {
  Section: OrderSection,
  Right: OrderRightGroup,
  Left: OrderLeftGroup,
  Item: OrderItem,
  Summary: OrderSummary,
};

export default Order;
