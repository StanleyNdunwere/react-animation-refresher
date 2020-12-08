
import './App.css';
import HomeComponent from './components/home/home.component';
import { Switch, Route } from 'react-router-dom'
import BaseComponent from './components/base/base.component';
import ToppingsComponent from './components/toppings/toppings.component';
import OrderComponent from './components/order/order.component';
import { OrderProvider } from './contexts/order_context/order.context';
import { useReducer } from 'react';

function App() {


  let initialState = {
    option: '',
    toppings: []
  }


  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_ACTION":
        return { ...state, option: action.payload }
      case "UPDATE_TOPPINGS":
        return { ...state, toppings: [...action.payload] }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <OrderProvider value={[state, dispatch]} >
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
