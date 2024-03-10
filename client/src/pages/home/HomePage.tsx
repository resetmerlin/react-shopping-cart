import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Home, Loader, ProductItem } from '../../components';
import { getProductsAction } from '../../actions';
import { useAddToCart, useAppDispatch, useAppSelector } from '../../hooks';
import { IProduct } from '../../types';

/**
 *  ## Responsible for conducting business logic of the home page
 *
 * - Renders given component
 * - Add dependencies from react, react router dom, components, actions, hooks, types
 * - Fetch products if there is no products data
 */
export default function HomePage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const productsInfo = useAppSelector((state) => state.productsInfo);
  const { loading, products } = productsInfo;

  // if there is no products,fetch it!
  useEffect(() => {
    let ignore = false;
    if (!ignore && !products?.length) {
      dispatch(getProductsAction());
    }

    return () => {
      ignore = true;
    };
  }, [dispatch, products]);

  return (
    <div className="root">
      <Header />
      <Home.Section>
        {loading ? (
          <Loader />
        ) : (
          products?.map((product: IProduct) => {
            return (
              <ProductItem
                key={product?.id}
                id={product?.id}
                name={product?.name}
                price={product?.price}
                imageUrl={product?.imageUrl}
                navigate={navigate}
                dispatch={dispatch}
                addToCart={useAddToCart}
              />
            );
          })
        )}
      </Home.Section>
    </div>
  );
}
