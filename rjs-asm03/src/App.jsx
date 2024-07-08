import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Layout from './layout/Layout';
import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';
import DetailPage from './pages/detail/DetailPage';
import CartPage from './pages/cart/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/login/LoginPage';
import SignUp from './pages/login/SignUp';
import SignIn from './pages/login/SignIn';
import ProductList from './pages/shop/productList/ProductList';

import { fetchProducts } from './pages/shop/productList/productListSlice';
import { onLogin } from './pages/login/LoginSlice';

function App() {
  const currentUserstr = localStorage.getItem('currentUser') ?? '{}';
  const currentUser = JSON.parse(currentUserstr);
  const dispatch = useDispatch();

  // mỗi lần component dược mount thì sẽ thực hiện lấy data từ api
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(onLogin(currentUser));
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='shop' element={<ShopPage />} >
            <Route path='' element={<ProductList />} />
            <Route path=':category' element={<ProductList />} />
          </Route>
          <Route path='detail/:id' element={<DetailPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='checkout' element={<CheckoutPage />} />
          <Route path='login' element={<LoginPage />} >
            <Route path='' element={<SignIn />} />
            <Route path='signup' element={<SignUp />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
