import styles from './ProductItemDetails.module.scss';

export default function ProductItemDetails() {
  return (
    <div className="flex-col-center w-520">
      <img
        className="w-480 h-480 mb-10"
        src="./assets/images/product.png"
        alt="PET보틀-정사각(420ml)"
      />
      <div className={styles.product__detail__info}>
        <span className={styles.product__detail__info__name}>
          PET보틀-정사각(420ml)
        </span>
        <hr className="divide-line-gray my-20" />
        <div className="flex justify-between">
          <span>금액</span>
          <span className={styles.product__detail__info__price}>43,000원</span>
        </div>
      </div>

      {/*  Need to make into Atom */}
      <button className="product-detail-button flex-center mt-20" type="submit">
        장바구니
      </button>
    </div>
  );
}
