export interface LoginFormProps {
    onLoginSuccess: () => void;
}

export interface UserProfile {
    id: number;
    name: string;
    age?: number;
    gender?: 'Male' | 'Female';
    city: string;
    university: string;
    interests: string[];
}

export interface RecommendationProps {
    profile: UserProfile;
    onSwipe: (direction: string) => void;
}

export interface SessionData {
    isLoggedIn: boolean;
    userId?: string;
    username?: string;
}