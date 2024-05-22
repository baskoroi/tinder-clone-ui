import React from 'react';
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faChevronLeft, faChevronRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import ImageIndicator from '../../molecules/ImageIndicator';

interface CardProps {
  imageUrls: string[];
  zIndex: number;
}

interface CardState {
  currentImageIndex: number;
}

class Card extends React.Component<CardProps, CardState> {
  state: CardState = {
    currentImageIndex: 0,
  };

  openPreviousImage = (): void => {
    const { currentImageIndex } = this.state;
    if (currentImageIndex - 1 < 0) return;
    this.setState({
      currentImageIndex: currentImageIndex - 1,
    });
  };

  openNextImage = (): void => {
    const { currentImageIndex } = this.state;
    if (currentImageIndex + 1 === this.props.imageUrls.length) return;
    this.setState({
      currentImageIndex: currentImageIndex + 1,
    });
  };

  render(): React.ReactNode {
    const { imageUrls, zIndex } = this.props;
    const { currentImageIndex } = this.state;
    const numberOfImages = imageUrls.length;
    return (
      <div className={styles.container} style={{ zIndex }}>
        <ImageIndicator numberOfImages={numberOfImages} currentIndex={currentImageIndex} />
        <img
          src={imageUrls[currentImageIndex]}
          className={styles.image}
          alt="Your recommended user"
        />
        {currentImageIndex !== 0
          ? (
            <div className={styles['prev-image-wrapper']} onClick={this.openPreviousImage}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                className={styles['prev-image-button']}
              />
            </div>
          )
          : undefined}
          {currentImageIndex !== numberOfImages - 1
            ? (
              <div className={styles['next-image-wrapper']} onClick={this.openNextImage}>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={styles['next-image-button']}
                />
              </div>
            )
            : undefined}
        <div className={styles['info']}>
          <div className={styles['identifier']}>
            <div className={styles['name-age']}>
              <span className={styles['name']}>Kezia</span>
              <span className={styles['age']}>23</span>
            </div>
            <button type="button" className={styles['reveal-button']}>
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
          </div>
          <div className={styles['location']}>
            <FontAwesomeIcon icon={faLocationDot} className={styles['location-icon']} />
            <span>22 km away</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;