// SwipeFeature.tsx
import { useState, useEffect } from 'react';
import Recommendation from './Recommendation';
import { UserProfile } from '../interfaces';

interface SwipeFeatureProps {
  onLogout: () => void; 
}

const SwipeFeature = ({ onLogout }: SwipeFeatureProps) => {
  const [recommendations, setRecommendations] = useState<UserProfile[]>([]);

  useEffect(() => {
    fetchRecommendations();
  }, []);

  const fetchRecommendations = async () => {
    try {
      const response = await fetch('./db.json');
      if (!response.ok) {
        throw new Error('Failed to fetch recommendations');
      }
      const data = await response.json();
      setRecommendations(data.recommendations);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  const handleSwipe = (direction: string) => {
    console.log('Swiped', direction);
    if (recommendations.length > 0) {
      setRecommendations(recommendations.slice(1));
    }
  };

  return (
    <div>
      <h1>Swipe Profiles</h1>
      {recommendations.length > 0 ? (
        <Recommendation profile={recommendations[0]} onSwipe={handleSwipe} />
      ) : (
        <p>No more recommendations</p>
      )}
      <button onClick={onLogout}>Logout</button> {/* Add logout button */}
    </div>
  );
};

export default SwipeFeature;
