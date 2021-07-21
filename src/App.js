import React from 'react';
import './App.css';

import ProductContext from "./ProductContext";
import ProductListing from "./components/ProductListing";
import AddProduct from './components/AddProduct';

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
      },
      addProduct: (productName, cost) => {
        let id = Math.floor(Math.random() * 10000 + 9999);
        this.setState({
          'products': [...this.state.products, {
            id,
            product_name: productName,
            cost
          }]
        })
      }
    }

    return (
      <ProductContext.Provider value={context}>
        <React.Fragment>
          <ProductListing />
          <AddProduct />
        </React.Fragment>
      </ProductContext.Provider>
    )
  }
}

export default App;
