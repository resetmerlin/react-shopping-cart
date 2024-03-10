import { Button, HightlightText } from '../../atom';
import styles from './OrderSummary.module.scss';

export default function OrderSummary() {
  return (
    <>
      <div className={styles.order__right__group__top}>
        <h3 className={styles.order__title}>결제금액</h3>
      </div>
      <hr className="divide-line-thin" />
      <div className="order-right-section__bottom">
        <div className="flex justify-between p-20 mt-20">
          <HightlightText>총 결제금액</HightlightText>
          <HightlightText>21,800원</HightlightText>
        </div>
        <div className="flex-center mt-30 mx-10">
          <Button className="flex-center" type="button" purpose="primary">
            21,800원 결제하기
          </Button>
        </div>
      </div>
    </>
  );
}
