import { Header, Home, Loader, Product } from '../../components';
import { IProduct } from '../../types';
import useHomePage from './HomePage.hook';

/**
 *  ## Responsible for conducting business logic of the home page
 *
 * - Renders given component
 * - Add dependencies from react, react router dom, components, actions, hooks, types
 * - Fetch products if there is no products data
 */
export default function HomePage() {
  const { state, action } = useHomePage();

  return (
    <div className="root">
      <Header />
      <Home.Section>
        {state.loading ? (
          <Loader />
        ) : (
          state.products?.map((product: IProduct) => {
            return (
              <Product.Item
                key={product?.id}
                id={product?.id}
                name={product?.name}
                price={product?.price}
                imageUrl={product?.imageUrl}
                navigate={state.navigate}
                dispatch={state.dispatch}
                addToCart={action.addToCart}
              />
            );
          })
        )}
      </Home.Section>
    </div>
  );
}
