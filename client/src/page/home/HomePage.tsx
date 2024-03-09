import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Home, Loader, ProductItem } from '../../components';
import { cartAddAction, productsAction } from '../../actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Product } from '../../types';

export default function HomePage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const productsInfo = useAppSelector((state) => state.productsInfo);
  const { loading, products } = productsInfo;

  useEffect(() => {
    let ignore = false;
    if (!ignore && !products?.length) {
      dispatch(productsAction());
    }

    return () => {
      ignore = true;
    };
  }, [dispatch, products]);

  const addToCart = (
    name: string,
    id: number,
    price: number,
    imageUrl: string
  ) => {
    const product = { name, id, price, imageUrl };
    dispatch(cartAddAction(product));
    navigate('/cart');
  };

  return (
    <div className="root">
      <Header />
      <Home.Section>
        {loading ? (
          <Loader />
        ) : (
          products?.map((product: Product) => {
            return (
              <ProductItem
                key={product?.id}
                id={product?.id}
                name={product?.name}
                price={product?.price}
                imageUrl={product?.imageUrl}
                addToCart={addToCart}
              />
            );
          })
        )}
      </Home.Section>
    </div>
  );
}
