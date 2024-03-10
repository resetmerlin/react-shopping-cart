/* eslint-disable import/no-extraneous-dependencies */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ThunkMiddleware, thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import {
  ordersReducers,
  cartAddReducers,
  cartDeleteReducers,
  cartsReducers,
  productReducers,
  productsReducers,
  orderAddedReducers,
  addStaticOrdersReducers,
} from './reducer';

const reducer = combineReducers({
  productsInfo: productsReducers,
  productInfo: productReducers,
  cartsInfo: cartsReducers,
  cartAddInfo: cartAddReducers,
  cartDeleteInfo: cartDeleteReducers,
  ordersInfo: ordersReducers,
  orderAddedInfo: orderAddedReducers,
  addStaticOrderInfo: addStaticOrdersReducers,
});

const initialState = {};

// const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<AppState>))
);
export type AppState = ReturnType<typeof reducer>;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
