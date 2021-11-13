import logo from './logo.svg';
import './App.css';
import Layout from './Pages/Layout/Layout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Pages/Home/Home'
import ViewAllFeatureProduct from './Pages/ViewAllFeatureProduct/ViewAllFeatureProduct';
import FeatureProductDetails from './Pages/FeatureProductDetails/FeatureProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/all-feature-product" >
            <ViewAllFeatureProduct />
          </Route>
          <Route path="/product-details/:key">
            <FeatureProductDetails />
          </Route>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="*">
            <h3>Page Not Found </h3>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
