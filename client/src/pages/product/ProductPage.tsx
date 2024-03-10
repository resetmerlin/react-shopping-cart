import { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header, Loader, Product, ProductItemDetails } from '../../components';
import { useAddToCart, useAppDispatch, useAppSelector } from '../../hooks';
import { IProduct } from '../../types';
import { productAction } from '../../actions';
/**
 *  ## Responsible for conducting business logic of the product page
 *
 * - Renders given component
 * - Add dependencies from react, react router dom, components, actions, hooks, types
 * - Find single product using existing products data based on the params, if there is no single product, fetch it
 * - Go home page if there is no params
 */
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

  return (
    <div className="root">
      <Header />
      <Product.Section>
        {!singleProduct && !product ? (
          <Loader />
        ) : (
          <ProductItemDetails
            id={product?.id || (singleProduct as IProduct)?.id}
            addToCart={useAddToCart}
            dispatch={dispatch}
            navigate={navigate}
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
