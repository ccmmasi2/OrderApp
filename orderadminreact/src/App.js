import React, { useState } from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import HomeForm from './pages/home-form';
import ProductListForm from './pages/product-list-form';
import ShoppingCartForm from './pages/shopping-cart-form';
import OrderListForm from './pages/order-list-form';
import NoPage from './pages/no-page';

function App() {
  const [selectedOption, setSelectedOption] = useState('1');

  const handleOptionChange = (selectedValue) => {
    setSelectedOption(selectedValue);
  };

  return (
    <div>
       <BrowserRouter>
       <Routes>
          <Route
            index
            element={<HomeForm selectedOption={selectedOption} handleOptionChange={handleOptionChange} />}
          />
          <Route
            path="/Home"
            element={<HomeForm selectedOption={selectedOption} handleOptionChange={handleOptionChange} />}
          />
          <Route
            path="/Catalog"
            element={<ProductListForm selectedOption={selectedOption} handleOptionChange={handleOptionChange} />}
          />
          <Route
            path="/Shopping-Cart"
            element={<ShoppingCartForm selectedOption={selectedOption} handleOptionChange={handleOptionChange} />}
          />
          <Route
            path="/Order-List"
            element={<OrderListForm selectedOption={selectedOption} handleOptionChange={handleOptionChange} />}
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
