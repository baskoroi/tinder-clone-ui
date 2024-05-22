import React, { useState } from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons';
import Card from './components/organisms/Card';
import ButtonPanel from './components/molecules/ButtonPanel';

const TEST_IMAGE_1: string = 'https://images-ssl.gotinder.com/u/fXC9j6Jy16wV99b6E2QHQn/965XggPbCUEE6H6HKQSjMG.webp?Policy=eyJTdGF0ZW1lbnQiOiBbeyJSZXNvdXJjZSI6IiovdS9mWEM5ajZKeTE2d1Y5OWI2RTJRSFFuLyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3MTY3MjM2OTV9fX1dfQ__&Signature=pnbWchSQUtzfj88VrdRro6khxTYFI5ZqgRKBfyDgojxBsGjs2dIznvFiAiYu7my6MXvxIaBlrHat-cf4Jgs6MZHV9l7nDWKzetnEITXvhdI0FJKqkhJXuKxK7qyF7GwamJLmPtZhHCJe8BEeKJbf42vpSuIdNjQNCDSwTlJ-or96PiistGWfNxaJPugFrXxxC-BcJl7lNtZza7OvRwnqXdEqXdsbtaR2sdrPfmDhpLaUQQyGEL90A8Rh2hivXAuSVFrRCNSfvGw47OM2IRliO77yb6zGDmmB3FJUwiJsG8AEpPa1X-ABNDGmNEC9cxzeZ0n1RWzJrCrWgOeE6cWKUw__&Key-Pair-Id=K368TLDEUPA6OI';
const TEST_IMAGE_2: string = 'https://images-ssl.gotinder.com/u/5NRCFPzF46jb8qLoEkyjx2/xq4MfvmKta1vxyLUcLD13M.webp?Policy=eyJTdGF0ZW1lbnQiOiBbeyJSZXNvdXJjZSI6IiovdS81TlJDRlB6RjQ2amI4cUxvRWt5angyLyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3MTY4NTI5NzJ9fX1dfQ__&Signature=O2MlsD0s5f-1ZTFWHOgg1vflkKARhocQEVKVpSY86RQTzgkPERe0FfcrpFSURklGvIVhUErSXNl2bI6K8agkw9w94ZqBLF59G5tt0XViiIioZEccqb9Kdus-TUqeHPXquDBJGny8fRfSOXAXDuC1ILhvWKhYlQbdMD5oc62kRyHSRnExGDxPLKGcGkAylmwJ2NcLb--D5t311DRdKG5k9oM7siNWCsz0JnExcRN~VltBankSg5-s-zkZPa67q7p2qlyacr8O08kyFTbWug1DL5iE~QZyoxcsTSfgI~jntjVnU4k20brA5L9fy3oW9Cugl0PLN8NL~Zl9ZSZ0dqB7ZA__&Key-Pair-Id=K368TLDEUPA6OI';

const App: React.FC = () => {
  const [cards, setCards] = useState([
    { id: 1, imageUrls: [TEST_IMAGE_1, TEST_IMAGE_2, TEST_IMAGE_1, TEST_IMAGE_2] },
    { id: 2, imageUrls: [TEST_IMAGE_1, TEST_IMAGE_2] },
  ]);

  const handleSwipe = (id: number) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  return (
    <div className={styles.App}>
      <nav>
        <img src={logo} alt="logo" className={styles['img-logo']} />
        <div className={styles['nav-buttons']}>
          <a href="/">
            <FontAwesomeIcon icon={faBell} size="2x" />
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faBars} size="2x" />
          </a>
        </div>
      </nav>
      <div className={styles['card-stack']}>
        {cards.map((card, index) => (
          <Card
            key={card.id}
            imageUrls={card.imageUrls}
            zIndex={cards.length - index}
            onSwipe={() => handleSwipe(card.id)}
          />
        ))}
        <div className={styles['message-after-swipe']}>
          <div>That was the final card!</div>
          <div>Please come back tomorrow!</div>
        </div>
      </div>
      <ButtonPanel />
    </div>
  );
};

export default App;
