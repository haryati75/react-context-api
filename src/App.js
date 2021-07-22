import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import ProductListingPage from './pages/ProductListingPage';
import ProductProvider from './ProductProvider';

class App extends React.Component {
  state = {}

  render() {

    return (

      <React.Fragment>
        <ProductProvider >
          <Router>
            <Switch>
              <Route exact path="/">
                <ProductListingPage />
              </Route>
            </Switch>
          </Router>
        </ProductProvider>
      </React.Fragment>

    )
  }
}

export default App;
