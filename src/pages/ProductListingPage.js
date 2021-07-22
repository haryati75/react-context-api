import React from 'react';

import ProductListing from '../components/ProductListing';
import AddProduct from '../components/AddProduct';

export default function ProductListingPage(props) {
    return (
        <React.Fragment>
            <ProductListing />
            <AddProduct />
        </React.Fragment>
    )
}