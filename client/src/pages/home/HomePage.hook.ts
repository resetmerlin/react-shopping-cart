import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProductsAction } from '../../actions';
import { useAddToCart, useAppDispatch, useAppSelector } from '../../hooks';

const useHomePage = () => {
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

  return {
    state: {
      loading,
      products,
      navigate,
      dispatch,
    },
    action: {
      addToCart: useAddToCart,
    },
  };
};

export default useHomePage;
