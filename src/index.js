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
import ProductsWork from './components/ProductsWork';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




// const saveToLocalStorage = (reduxGlobalState) => {
//   //serialization = converting js object to string
//   try{
//       const serializeState = JSON.stringify(reduxGlobalState)
//       localStorage.setItem('state',serializeState)
//   }catch(e){
//     console.log(e)
//   }
// }

// const loadFromLocalStorage = () => {
//   //deserialization
//   const serializedState = localStorage.getItem('state');
//   if('state' == null){
//     return undefined
//   }else{
//     return JSON.parse(serializedState)
//   }
// }

// const persistedState = loadFromLocalStorage()

// const store = createStore(reducer,persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


// store.subscribe(() => {
//   //happens every time there is a change to global state
//   saveToLocalStorage(store.getState())
// })



const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/productsWork" element={<ProductsWork />}/>
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/payment" element={<Payment />}/>
          {/* <Route path="/ProductDetails" element={<ProductDetails />}/> */}
          <Route path="/ProductDetails/:ProductID" element={<ProductDetails />}/>
          
        </Routes>
      </BaseLayout>
    </Router>
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

