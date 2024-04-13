import { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAddToCart, useAppDispatch, useAppSelector } from '../../hooks';
import { IProduct } from '../../types';
import { getProductAction } from '../../actions';

const useProductPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const productId = params?.id ? +params.id : undefined;
  const productsInfo = useAppSelector((state) => state.productsInfo);
  const productInfo = useAppSelector((state) => state.productInfo);
  const { products } = productsInfo;
  const { product: dynamicProduct } = productInfo;

  /** product value using exisiting products data, this is why the name is static */
  const staticProduct = useMemo(
    () =>
      [...products] &&
      ([...products].find((val) => val.id === productId) as IProduct),
    [productId, products]
  );

  // if there is no params, navigate to home
  useEffect(() => {
    if (!productId) navigate('/');
  }, [productId, navigate]);

  // if there is no single product data, fetch(dynamic) single product
  useEffect(() => {
    let ignore = false;
    if (!ignore && !staticProduct && productId) {
      dispatch(getProductAction(productId));
    }

    return () => {
      ignore = true;
    };
  }, [dispatch, productId, staticProduct, products]);

  return {
    state: {
      dynamicProduct,
      staticProduct,
      dispatch,
      navigate,
    },
    action: {
      useAddToCart,
    },
  };
};

export default useProductPage;
