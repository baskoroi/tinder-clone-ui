import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons';
import Card from './components/organisms/Card';

const TEST_IMAGE_SRC: string = 'https://images-ssl.gotinder.com/u/fXC9j6Jy16wV99b6E2QHQn/965XggPbCUEE6H6HKQSjMG.webp?Policy=eyJTdGF0ZW1lbnQiOiBbeyJSZXNvdXJjZSI6IiovdS9mWEM5ajZKeTE2d1Y5OWI2RTJRSFFuLyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3MTY3MjM2OTV9fX1dfQ__&Signature=pnbWchSQUtzfj88VrdRro6khxTYFI5ZqgRKBfyDgojxBsGjs2dIznvFiAiYu7my6MXvxIaBlrHat-cf4Jgs6MZHV9l7nDWKzetnEITXvhdI0FJKqkhJXuKxK7qyF7GwamJLmPtZhHCJe8BEeKJbf42vpSuIdNjQNCDSwTlJ-or96PiistGWfNxaJPugFrXxxC-BcJl7lNtZza7OvRwnqXdEqXdsbtaR2sdrPfmDhpLaUQQyGEL90A8Rh2hivXAuSVFrRCNSfvGw47OM2IRliO77yb6zGDmmB3FJUwiJsG8AEpPa1X-ABNDGmNEC9cxzeZ0n1RWzJrCrWgOeE6cWKUw__&Key-Pair-Id=K368TLDEUPA6OI';

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
    <Card imageUrl={TEST_IMAGE_SRC} numberOfImages={5} />
    </div>
  );
  }
}

export default App;
