import React from 'react';
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoltLightning, faRefresh, faStar, faThumbsUp, faXmark } from '@fortawesome/free-solid-svg-icons';

class ButtonPanel extends React.Component {
	render(): React.ReactNode {
		return (
			<div className={styles.container}>
				<div className={styles['button-refresh']}>
					<FontAwesomeIcon icon={faRefresh} />
				</div>
				<div className={styles['button-nope']}>
					<FontAwesomeIcon icon={faXmark} />
				</div>
				<div className={styles['button-super-like']}>
					<FontAwesomeIcon icon={faStar} />
				</div>
				<div className={styles['button-like']}>
					<FontAwesomeIcon icon={faThumbsUp} />
				</div>
				<div className={styles['button-boost']}>
					<FontAwesomeIcon icon={faBoltLightning} />
				</div>
			</div>
		);
	}
}

export default ButtonPanel;
