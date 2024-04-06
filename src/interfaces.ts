export interface LoginFormProps {
    onLoginSuccess: () => void;
}

export interface UserProfile {
    id: number;
    name: string;
    age?: number;
    gender?: 'male' | 'female';
    city: string;
    university: string;
    interests: string[];
    imagePath: string;
}

export interface RecommendationProps {
    profile: UserProfile;
    onSwipe: (direction: string) => void;
}
