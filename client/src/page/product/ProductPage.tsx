import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { Header, Loader, Product, ProductItemDetails } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Product as IProduct } from '../../types';
import { productAction } from '../../actions';

export default function ProductPage() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const id = params?.id ? +params.id : undefined;
  const productsInfo = useAppSelector((state) => state.productsInfo);
  const productInfo = useAppSelector((state) => state.productInfo);

  const { products } = productsInfo;
  const { product: singleProduct } = productInfo;

  const product = useMemo(
    () =>
      [...products] && ([...products].find((val) => val.id === id) as IProduct),
    [id, products]
  );
  useEffect(() => {
    if (!id) navigate('/');
  }, [id, navigate]);

  useEffect(() => {
    let ignore = false;
    if (!ignore && !product && id) {
      dispatch(productAction(id));
    }

    return () => {
      ignore = true;
    };
  }, [dispatch, id, product, products]);

  return (
    <div className="root">
      <Header />
      <Product.Section>
        {!singleProduct && !product ? (
          <Loader />
        ) : (
          <ProductItemDetails
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
