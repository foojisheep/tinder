import { UserProfile } from '../interfaces';

export const generateRandomUserProfile = (gender: 'Male' | 'Female'): UserProfile => {
    const firstNames = gender === 'Male' ? ['Albert', 'Chris', 'Michael', 'William', 'David', 'Jonathan'] : ['Emma', 'Olivia', 'Sophia', 'Ava', 'Emily', 'Kylie'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Cooper', 'Wick'];
    const locations = ['Tokyo', 'New York', 'London', 'Paris', 'Kuala Lumpur', 'Taipei', 'Seoul'];
    const universities = ['Princeton', 'Harvard', 'MIT', 'Stanford', 'Oxford', 'Cambridge'];
    const interests = ['Programming', 'Traveling', 'Reading', 'Cooking', 'Sports', 'Rock Climbling', 'Baking', 'Yoga'];

    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const randomCity = locations[Math.floor(Math.random() * locations.length)];
    const randomUniversity = universities[Math.floor(Math.random() * universities.length)];
    const randomInterests: string[] = [];
    for (let i = 0; i < Math.floor(Math.random() * interests.length); i++) {
        const randomInterest = interests[Math.floor(Math.random() * interests.length)];
        if (!randomInterests.includes(randomInterest)) {
        randomInterests.push(randomInterest);
        }
    }

    const userProfile: UserProfile = {
        id: Math.floor(Math.random() * 1000),
        name: `${randomFirstName} ${randomLastName}`,
        age: Math.floor(Math.random() * 50) + 15,
        gender: gender,
        city: randomCity,
        university: randomUniversity,
        interests: randomInterests
    };

    return userProfile;
};
