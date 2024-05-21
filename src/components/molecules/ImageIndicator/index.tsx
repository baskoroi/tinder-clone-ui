import React, { ReactNode } from 'react';
import styles from './style.module.scss';

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
          className={styles.indicator}
          style={{
            width: `${100/numberOfImages}%`,
            backgroundColor: i === currentIndex ? '#ffffff' : '#505965',
          }}
        />
      );
    }
    return (
      <div className={styles.container}>
        {imageIndicator}
      </div>
    );
  }
}

export default ImageIndicator;
