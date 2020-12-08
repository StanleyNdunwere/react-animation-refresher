
import './App.css';
import HomeComponent from './components/home/home.component';
import { Switch, Route } from 'react-router-dom'
import BaseComponent from './components/base/base.component';
import ToppingsComponent from './components/toppings/toppings.component';
import OrderComponent from './components/order/order.component';
import { OrderProvider } from './contexts/order_context/order.context';

function App() {

  return (
    <OrderProvider value={{ option: "", toppings: [] }} >
      <div className="App">
        <header className="App-header">
          <div className="logo-text-container">
            <div className="header-image"></div>
            <div className="header-text">
              <h1><a href="/">Pizza Joint</a></h1>
              <hr />
            </div>
          </div>
        </header>
        <div className="content-container">
          <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route exact path="/base" component={BaseComponent} />
            <Route exact path="/toppings" component={ToppingsComponent} />
            <Route exact path="/order" component={OrderComponent} />
          </Switch>
        </div>
      </div>
    </ OrderProvider>
  );
}

export default App;
