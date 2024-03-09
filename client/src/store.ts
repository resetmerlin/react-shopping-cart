/* eslint-disable import/no-extraneous-dependencies */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ThunkMiddleware, thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import {
  cartAddReducers,
  cartDeleteReducers,
  cartsReducers,
  productReducers,
  productsReducers,
} from './reducer';

const reducer = combineReducers({
  productsInfo: productsReducers,
  productInfo: productReducers,
  cartsInfo: cartsReducers,
  cartAddInfo: cartAddReducers,
  cartDeleteInfo: cartDeleteReducers,
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
