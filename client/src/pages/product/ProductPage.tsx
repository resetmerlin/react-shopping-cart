import { Header, Loader, Product } from '../../components';
import { IProduct } from '../../types';
import useProductPage from './ProductPage.hook';
/**
 *  ## Responsible for conducting business logic of the product page
 *
 * - Renders given component
 * - Add dependencies from react, react router dom, components, actions, hooks, types
 * - Find single product using existing products data based on the params, if there is no single product, fetch it
 * - Go home page if there is no params
 */
export default function ProductPage() {
  const { state, action } = useProductPage();
  return (
    <div className="root">
      <Header />
      <Product.Section>
        {!state.dynamicProduct && !state.staticProduct ? (
          <Loader />
        ) : (
          <Product.ItemDetails
            id={
              state.staticProduct?.id || (state.dynamicProduct as IProduct)?.id
            }
            addToCart={action.useAddToCart}
            dispatch={state.dispatch}
            navigate={state.navigate}
            name={
              state.staticProduct?.name ||
              (state.dynamicProduct as IProduct)?.name
            }
            price={
              state.staticProduct?.price ||
              (state.dynamicProduct as IProduct)?.price
            }
            imageUrl={
              state.staticProduct?.imageUrl ||
              (state.dynamicProduct as IProduct)?.imageUrl
            }
          />
        )}
      </Product.Section>
    </div>
  );
}
