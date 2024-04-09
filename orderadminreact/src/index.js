import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

import ShowMessageForm from './components/shared/show-message/show-message-form';
import GenerateOrderForm from './components/shared/generate-order/generate-order-form';
import HeaderForm from './components/layout/header/header-form';
import HomeForm from './components/home/home-form';
import ShoppingCartForm from './components/catalog/shopping-cart/shopping-cart-form';
import ProductListForm from './components/catalog/product-list/product-list-form';
import OrderListForm from './components/catalog/order-list/order-list-form';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderForm />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
