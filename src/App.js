import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import ProductListingPage from './pages/ProductListingPage';
import ProductDetailsPage from './components/ProductDetailsPage';
import ProductProvider from './ProductProvider';

class App extends React.Component {

  render() {

    return (

      <React.Fragment>
        <ProductProvider >
          <Router>
            <Switch>
              <Route exact path="/">
                <ProductListingPage />
              </Route>
              <Route path="/productDetails/:productId"
                render={props => <ProductDetailsPage {...props} />}
              >
              </Route>
            </Switch>
          </Router>
        </ProductProvider>
      </React.Fragment>

    )
  }
}

export default App;
