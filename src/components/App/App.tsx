import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import blue from '@material-ui/core/colors/blue';

import PageProducts from "components/pages/PageProducts/PageProducts";
import MainLayout from "components/MainLayout/MainLayout";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PageProductForm from "components/pages/PageProductForm/PageProductForm";
import PageCart from "components/pages/PageCart/PageCart";
import PageOrders from "components/pages/PageOrders/PageOrders";
import PageOrder from "components/pages/PageOrder/PageOrder";
import PageProductImport from "components/pages/admin/PageProductImport/PageProductImport";

import 'components/App/App.css';

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: blue,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/">
            <MainLayout>
              <Route exact path="/">
                <PageProducts />
              </Route>
              <Route exact path={["/admin/product-form/:id", '/admin/product-form']}>
                <PageProductForm />
              </Route>
              <Route exact path="/cart">
                <PageCart />
              </Route>
              <Route exact path="/admin/orders">
                <PageOrders />
              </Route>
              <Route exact path="/admin/order/:id">
                <PageOrder />
              </Route>
              <Route exact path="/admin/products">
                <PageProductImport />
              </Route>
            </MainLayout>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
