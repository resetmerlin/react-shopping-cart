import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { Header, Loader, Product, ProductItemDetails } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Product as IProduct } from '../../types';
import { cartAddAction, productAction } from '../../actions';

export default function ProductPage() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const productId = params?.id ? +params.id : undefined;
  const productsInfo = useAppSelector((state) => state.productsInfo);
  const productInfo = useAppSelector((state) => state.productInfo);
  const { products } = productsInfo;
  const { product: singleProduct } = productInfo;

  /** product value using products; multiple product data */
  const product = useMemo(
    () =>
      [...products] &&
      ([...products].find((val) => val.id === productId) as IProduct),
    [productId, products]
  );

  // if there is no params, navigate to home
  useEffect(() => {
    if (!productId) navigate('/');
  }, [productId, navigate]);

  // if there is no single product data, fetch single product
  useEffect(() => {
    let ignore = false;
    if (!ignore && !product && productId) {
      dispatch(productAction(productId));
    }

    return () => {
      ignore = true;
    };
  }, [dispatch, productId, product, products]);

  const addToCart = (
    name: string,
    id: number,
    price: number,
    imageUrl: string
  ) => {
    const cart = { name, id, price, imageUrl };
    dispatch(cartAddAction(cart));
    navigate('/cart');
  };

  return (
    <div className="root">
      <Header />
      <Product.Section>
        {!singleProduct && !product ? (
          <Loader />
        ) : (
          <ProductItemDetails
            id={product?.id || (singleProduct as IProduct)?.id}
            addToCart={addToCart}
            name={product?.name || (singleProduct as IProduct)?.name}
            price={product?.price || (singleProduct as IProduct)?.price}
            imageUrl={
              product?.imageUrl || (singleProduct as IProduct)?.imageUrl
            }
          />
        )}
      </Product.Section>
    </div>
  );
}
