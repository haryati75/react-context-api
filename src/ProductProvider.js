import React from 'react';
import ProductContext from './ProductContext';

export default class ProductProvider extends React.Component {
    state = {
        products: [
            { id: 1, product_name: "ACME Anvils", cost: 9.99 },
            { id: 2, product_name: "ACME Hammer", cost: 15.5 },
            { id: 3, product_name: "ACME Screwdriver", cost: 12.5 }
        ]
    }

    render = () => {
        const context = {
            getProducts: () => {return this.state.products;},
            addProduct: (newProductName, cost) => {
                let id = Math.floor(Math.random() * 10000 + 9999);
                const clone = [
                    ...this.state.products,
                    {
                        id,
                        product_name: newProductName,
                        cost
                    }
                ];

                this.setState({
                    products: clone
                });
            }
        }
        return (
            <ProductContext.Provider value={context}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}