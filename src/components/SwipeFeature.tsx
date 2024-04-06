import { useState, useEffect } from 'react';
import Recommendation from './Recommendation';
import { UserProfile } from '../interfaces';
import { generateRandomUserProfile } from '../utils/generateRamdomUserProfile';

interface SwipeFeatureProps {
  onLogout: () => void;
}

const SwipeFeature = ({ onLogout }: SwipeFeatureProps) => {
  const [recommendations, setRecommendations] = useState<UserProfile[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentGender, setCurrentGender] = useState<'Male' | 'Female'>('Male');

  useEffect(() => {
    fetchRecommendations();
  }, []);

  const fetchRecommendations = async () => {
    try {
      const randomRecommendations = Array.from({ length: 10 }, () => generateRandomUserProfile('Male'));
      setCurrentGender('Male');
      setRecommendations(randomRecommendations);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  const handleSwipe = (direction: string) => {
    if (direction === 'Yay') {
      if (currentIndex < recommendations.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        const moreRecommendations = Array.from({ length: 9 }, () => generateRandomUserProfile(currentGender));
        setRecommendations([...recommendations, ...moreRecommendations]);
      }
    } else if (direction === 'Nay') {
      const nextGender = currentGender === 'Male' ? 'Female' : 'Male';
      setCurrentGender(nextGender);
      const moreRecommendations = Array.from({ length: 9 }, () => generateRandomUserProfile(nextGender));
      setRecommendations(moreRecommendations);
    }
  };

  return (
    <div>
      <h1>Tinder Profile</h1>
      {recommendations.length > 0 ? (
        <div>
          <Recommendation profile={recommendations[currentIndex]} onSwipe={handleSwipe} />
          <div className="recommendation-buttons">
            <button className="yay" onClick={() => handleSwipe('Yay')}>Yay</button>
            <button className="nay" onClick={() => handleSwipe('Nay')}>Nay</button>
          </div>
        </div>
      ) : (
        <p>No more recommendations</p>
      )}
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default SwipeFeature;
