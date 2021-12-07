import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App';
import BaseLayout from './components/layout/BaseLayout';
import Products from './components/Products';
import Checkout from './components/Checkout'
import Payment from './components/Payment';
import ProductDetails from './components/ProductDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/payment" element={<Payment />}/>
          <Route path="/ProductDetails" element={<ProductDetails />}/>
          <Route path="/ProductDetails/:ProductID" element={<ProductDetails />}/>
          
        </Routes>
      </BaseLayout>
    </Router>
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

