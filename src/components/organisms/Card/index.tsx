import React, { FC, useState } from 'react';
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faChevronLeft, faChevronRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import ImageIndicator from '../../molecules/ImageIndicator';
import { animated, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';

interface CardProps {
  imageUrls: string[];
  zIndex: number;
  onSwipe: () => void; // Add onSwipe prop
}

const Card: FC<CardProps> = ({ zIndex, imageUrls, onSwipe }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openPreviousImage = (): void => {
    if (currentImageIndex - 1 < 0) return;
    setCurrentImageIndex(currentImageIndex - 1);
  };

  const openNextImage = (): void => {
    if (currentImageIndex + 1 === imageUrls.length) return;
    setCurrentImageIndex(currentImageIndex + 1);
  };

  const numberOfImages = imageUrls.length;

  const [{ x, y, rot, scale }, setSpring] = useSpring(() => ({
    x: 0,
    y: 0,
    rot: 0,
    scale: 1,
    config: { tension: 200, friction: 40 }, // Adjusted for slower animation
  }));

  const bind = useDrag(({ down, movement: [mx, my], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2;
    const dir = xDir < 0 ? -1 : 1;
    if (!down && trigger) {
      setSpring({
        x: dir * 2000,
        y: my,
        rot: mx / 100 + (dir * 10),
        scale: 1,
        onRest: onSwipe, // Call onSwipe when animation finishes
      });
    } else {
      setSpring({
        x: down ? mx : 0,
        y: down ? my : 0,
        rot: mx / 100,
        scale: down ? 1.1 : 1,
      });
    }
  });

  return (
    <animated.div
      {...bind()}
      style={{
        transform: x.to((x) => `translate3d(${x}px,${y.get()}px,0) rotate(${rot.get()}deg) scale(${scale.get()})`),
        zIndex,
        touchAction: 'none',
        width: '100%',
        height: '600px',
        position: 'absolute',
      }}
      onMouseDown={(e) => e.preventDefault()} // Prevent default behavior
    >
      <ImageIndicator numberOfImages={numberOfImages} currentIndex={currentImageIndex} />
      <img
        src={imageUrls[currentImageIndex]}
        className={styles.image}
        alt="Your recommended user"
        onMouseDown={(e) => e.preventDefault()} // Prevent image drag
      />
      {currentImageIndex !== 0 && (
        <div className={styles['prev-image-wrapper']} onClick={openPreviousImage}>
          <FontAwesomeIcon icon={faChevronLeft} className={styles['prev-image-button']} />
        </div>
      )}
      {currentImageIndex !== numberOfImages - 1 && (
        <div className={styles['next-image-wrapper']} onClick={openNextImage}>
          <FontAwesomeIcon icon={faChevronRight} className={styles['next-image-button']} />
        </div>
      )}
      <div className={styles.info}>
        <div className={styles.identifier}>
          <div className={styles['name-age']}>
            <span className={styles.name}>Kezia</span>
            <span className={styles.age}>23</span>
          </div>
          <button type="button" className={styles['reveal-button']}>
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
        <div className={styles.location}>
          <FontAwesomeIcon icon={faLocationDot} className={styles['location-icon']} />
          <span>22 km away</span>
        </div>
      </div>
    </animated.div>
  );
};

export default Card;
