import React from 'react';
import ProductContext from "../ProductContext";

export default class ProductDetailsPage extends React.Component {
    
    state = {
        productId : 0
    };

    static contextType = ProductContext;

    componentDidMount() {
        let { productId } = this.props.match.params;
        this.setState ({
            productId
        })
    }

    render() {

        let product = this.context.getProductById(this.state.productId)
        console.log(this.state.productId, product);

        return (
            <React.Fragment>
                <h1>Product Details</h1>
                { product? (
                    <ul>
                        <li>Id: {product.id}</li>
                        <li>Product Name: {product.product_name}</li>
                        <li>Product Cost: {product.cost}</li>
                    </ul>
                ) : null }
            </React.Fragment>
        )
    }
}