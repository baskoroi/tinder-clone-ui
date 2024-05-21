import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faChevronLeft, faChevronRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import ImageIndicator from '../../molecules/ImageIndicator';

interface CardProps {
  imageUrls: string[];
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
    const { imageUrls } = this.props;
    const { currentImageIndex } = this.state;
    const numberOfImages = imageUrls.length;
    return (
      <div className="container">
        <ImageIndicator numberOfImages={numberOfImages} currentIndex={currentImageIndex} />
        <img src={imageUrls[currentImageIndex]} className="image" alt="Your recommended pair" />
        {currentImageIndex !== 0
          ? (
            <div className="prev-image-wrapper" onClick={this.openPreviousImage}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="prev-image-button"
              />
            </div>
          )
          : undefined}
          {currentImageIndex !== numberOfImages - 1
            ? (
              <div className="next-image-wrapper" onClick={this.openNextImage}>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="next-image-button"
                />
              </div>
            )
            : undefined}
        <div className="info">
          <div className="identifier">
            <div className="name-age">
              <span className="name">Kezia</span>
              <span className="age">23</span>
            </div>
            <button type="button" className="reveal-button">
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
          </div>
          <div className="location">
            <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
            <span>22 km away</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;