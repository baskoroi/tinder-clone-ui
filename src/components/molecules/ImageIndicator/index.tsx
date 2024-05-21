import React, { ReactNode } from 'react';
import './style.css';

interface ImageIndicatorProps {
  numberOfImages: number;
  currentIndex: number;
}

class ImageIndicator extends React.Component<ImageIndicatorProps> {
  render(): ReactNode {
    const { numberOfImages, currentIndex } = this.props;
    let imageIndicator = [];
    for (let i = 0; i < numberOfImages; i++) {
      imageIndicator.push(
        <div
          className="indicator"
          style={{
          width: `${100/numberOfImages}%`,
          backgroundColor: i === currentIndex ? '#ffffff' : '#dddddd',
          }}
        />
      );
    }
    return (
      <div className="image-indicator">
        {imageIndicator}
      </div>
    );
  }
}

export default ImageIndicator;
