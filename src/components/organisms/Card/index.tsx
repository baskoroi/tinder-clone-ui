import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const TEST_IMAGE_SRC: string = 'https://images-ssl.gotinder.com/u/fXC9j6Jy16wV99b6E2QHQn/965XggPbCUEE6H6HKQSjMG.webp?Policy=eyJTdGF0ZW1lbnQiOiBbeyJSZXNvdXJjZSI6IiovdS9mWEM5ajZKeTE2d1Y5OWI2RTJRSFFuLyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3MTY3MjM2OTV9fX1dfQ__&Signature=pnbWchSQUtzfj88VrdRro6khxTYFI5ZqgRKBfyDgojxBsGjs2dIznvFiAiYu7my6MXvxIaBlrHat-cf4Jgs6MZHV9l7nDWKzetnEITXvhdI0FJKqkhJXuKxK7qyF7GwamJLmPtZhHCJe8BEeKJbf42vpSuIdNjQNCDSwTlJ-or96PiistGWfNxaJPugFrXxxC-BcJl7lNtZza7OvRwnqXdEqXdsbtaR2sdrPfmDhpLaUQQyGEL90A8Rh2hivXAuSVFrRCNSfvGw47OM2IRliO77yb6zGDmmB3FJUwiJsG8AEpPa1X-ABNDGmNEC9cxzeZ0n1RWzJrCrWgOeE6cWKUw__&Key-Pair-Id=K368TLDEUPA6OI';

class Card extends React.Component {
	render(): React.ReactNode {
		return (
			<div className="card">
				<img src={TEST_IMAGE_SRC} alt="Your recommended pair" />
				<div className="card-info">
					<div className="card-identifier">
						<div className="card-name-age">
							<span className="card-name">Kezia</span>
							<span className="card-age">23</span>
						</div>
						<button type="button" className="card-reveal-button">
							<FontAwesomeIcon icon={faArrowUp} />
						</button>
					</div>
					<div className="card-location">
						<FontAwesomeIcon icon={faLocationDot} className="card-location-icon" />
						<span>22 km away</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;