import logo from './logo.svg';
import './App.css';
import HomeComponent from './components/home/home.component';
import { Switch, Route } from 'react-router-dom'
import BaseComponent from './components/base/base.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-text-container">
          <div className="header-image"></div>
          <div className="header-text">
            <h1>Pizza Joint</h1>
            <hr />
          </div>
        </div>
      </header>
      <div className="content-container">
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/base" component={BaseComponent} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
