import { UserProfile } from '../interfaces';

interface RecommendationProps {
  profile: UserProfile;
  onSwipe: (direction: string, profileGender: string) => void;
}

const Recommendation = ({ profile, onSwipe }: RecommendationProps) => {
  return (
    <div className="recommendation-container">
      <h2 className="recommendation-header">{profile.name}</h2>
      <div className="recommendation-info">
        <p>Age: {profile.age}</p>
        <p>Gender: {profile.gender}</p>
        <p>City: {profile.city}</p>
        <p>Interest: {profile.interests[0]}</p>
      </div>
    </div>
  );
};

export default Recommendation;
