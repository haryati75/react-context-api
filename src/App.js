import React from 'react';
import './App.css';

import ProductProvider from './ProductProvider';
import ProductListing from "./components/ProductListing";
import AddProduct from './components/AddProduct';

class App extends React.Component {
  state = {}

  render() {

    return (
      <div className="App container-fluid">
        <ProductProvider>
            <ProductListing />
            <AddProduct />
        </ProductProvider>
      </div>
    )
  }
}

export default App;
