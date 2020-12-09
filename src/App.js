
import './App.css';
import HomeComponent from './components/home/home.component';
import { Switch, Route, useLocation } from 'react-router-dom'
import BaseComponent from './components/base/base.component';
import ToppingsComponent from './components/toppings/toppings.component';
import OrderComponent from './components/order/order.component';
import { OrderProvider } from './contexts/order_context/order.context';
import { useReducer } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function App() {

  const location = useLocation();
  console.log(location.pathname);
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

  const logoVariants = {
    init: {
      rotateY: 0,
      // rotateX: 0,
      // rotateZ: 0,
    },
    anim: {
      rotateY: 360,
      // rotateX: 360,
      // rotateZ:360,
      transition: { duration: 2 }
    }
  }
  return (
    <OrderProvider value={[state, dispatch]} >
      <div className="App">
        <header className="App-header">
          <div className="logo-text-container">
            <motion.div
              drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              variants={logoVariants}
              initial="init"
              animate="anim"
              className="header-image"></motion.div>
            <div className="header-text">
              <motion.h1
                initial={{ y: -200 }}
                animate={{ y: -0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              ><a href="/">Pizza Joint</a></motion.h1>
              <motion.hr
                initial={{ y: -200 }}
                animate={{ y: -0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              />
            </div>
          </div>
        </header>
        <motion.div
          className="content-container"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0,
            duration: 2,
          }}>
          {/* <AnimatePresence> */}
          <Switch >
            <Route exact path="/" component={HomeComponent} />
            <Route exact path="/base" component={BaseComponent} />
            <Route exact path="/toppings" component={ToppingsComponent} />
            <Route exact path="/order" component={OrderComponent} />
          </Switch>
          {/* </AnimatePresence> */}
        </motion.div>
      </div>
    </ OrderProvider >
  );
}

export default App;
