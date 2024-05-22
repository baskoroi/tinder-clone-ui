import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons';
import Card from './components/organisms/Card';
import ButtonPanel from './components/molecules/ButtonPanel';
import { UserProfile, mockUserProfiles } from './models/UserProfile';
import { Recommendation } from './services/Recommendation';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [recommendations, setRecommendations] = useState<UserProfile[]>([]);

  useEffect(() => {
    // Fetch or set the current user
    const user: UserProfile = {
      id: 0,
      name: 'John Doe',
      gender: 'male',
      location: 'New York',
      university: 'NYU',
      interests: ['coding', 'reading'],
      imageUrls: ['https://randomuser.me/api/portraits/men/26.jpg'],
    };
    setCurrentUser(user);
  }, []);

  useEffect(() => {
    if (currentUser) {
      const recommendation = new Recommendation(mockUserProfiles);
      const dailyRecommendations =
        recommendation.generateDailyRecommendations(currentUser);
      setRecommendations(dailyRecommendations);
    }
  }, [currentUser]);

  const handleSwipe = (id: number) => {
    setRecommendations((prevRecommendations) => prevRecommendations.filter((rec) => rec.id !== id));
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
        {recommendations.map((recommendation, index) => (
          <Card
            key={recommendation.id}
            userProfile={recommendation}
            zIndex={recommendations.length - index}
            onSwipe={() => handleSwipe(recommendation.id)}
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
