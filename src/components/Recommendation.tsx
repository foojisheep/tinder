import { UserProfile } from '../interfaces';

interface RecommendationProps {
  profile: UserProfile;
  onSwipe: (direction: string) => void;
}

const Recommendation = ({ profile, onSwipe } :RecommendationProps) => {
  return (
    <div>
      <img src={profile.imagePath} alt="placeholder"/>
      <h2>{profile.name}</h2>
      <p>{profile.age}</p>
      <p>Gender: {profile.gender}</p>
      <p>City: {profile.city}</p>
      <p>Interest: {profile.interests[0]}</p>
      <button onClick={() => onSwipe('yay')}>Yay</button>
      <button onClick={() => onSwipe('nay')}>Nay</button>
    </div>
  );
};

export default Recommendation;
