import HeaderForm from './components/layout/header/header-form';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import HomeForm from './pages/home-form';
import ProductListForm from './pages/product-list-form';
import ShoppingCartForm from './pages/shopping-cart-form';
import OrderListForm from './pages/order-list-form';
import NoPage from './pages/no-page';

function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route index element={<HomeForm/>} />
          <Route path='/Home' element={<HomeForm/>}/>
          <Route path='/Catalog' element={<ProductListForm/>}/>
          <Route path='/Shopping-Cart' element={<ShoppingCartForm/>}/>
          <Route path='/Order-List' element={<OrderListForm/>}/>
          <Route path='*' element={<NoPage/>}/>
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
