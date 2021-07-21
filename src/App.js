import React from 'react';
import './App.css';

import ProductContext from "./ProductContext";
import ProductListing from "./components/ProductListing";

class App extends React.Component {
  state = {
    products: [
      {
          id: 1,
          product_name: "ACME Anvils",
          cost: 9.99
        },
        {
          id: 2,
          product_name: "ACME Hammers",
          cost: 19.99
        },
        {
          id: 3,
          product_name: "ACME Screwdrivers",
          cost: 29.99
        }
    ]
  }

  render() {
    const context = {
      getProducts: () => {
        return this.state.products;
      }
    }

    return (
      <ProductContext.Provider value={context}>
        <React.Fragment>
          <ProductListing />
        </React.Fragment>
      </ProductContext.Provider>
    )
  }
}

export default App;
