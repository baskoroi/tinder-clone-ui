import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons';
import Card from './components/organisms/Card';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="App">
        <nav>
          <img src={logo} alt="logo" className="img-logo" />
          <div className="nav-buttons">
            <a href="/">
              <FontAwesomeIcon icon={faBell} size='2x' />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faBars} size='2x' />
            </a>
          </div>
        </nav> 
        <Card />
      </div>
    );
  }
}

export default App;
