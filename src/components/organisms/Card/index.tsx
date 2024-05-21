import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import ImageIndicator from '../../molecules/ImageIndicator';

interface CardProps {
  imageUrl: string;
  numberOfImages: number;
}

class Card extends React.Component<CardProps> {
  render(): React.ReactNode {
  const { imageUrl, numberOfImages } = this.props;
  return (
    <div className="container">
    <ImageIndicator numberOfImages={numberOfImages} currentIndex={0} />
    <img src={imageUrl} className="image" alt="Your recommended pair" />
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