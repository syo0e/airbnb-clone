import React from 'react';
import { BrowerRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Main from './Pages/Main/Main';
import ProductList from './Pages/ProductList/ProductList';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Footer from './Components/Footer/Footer';

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/productlist" component={ProductList}></Route>
        <Route exact path="/productdetail" component={ProductDetail}></Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
