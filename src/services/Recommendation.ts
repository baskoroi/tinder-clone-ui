import { UserProfile } from '../models/UserProfile';

export class Recommendation {
  private users: UserProfile[];

  constructor(users: UserProfile[]) {
    this.users = users;
  }

  private getSimilarityScore(user1: UserProfile, user2: UserProfile): number {
    let score = 0;
    if (user1.university === user2.university) score += 2;
    const commonInterests = user1.interests.filter(interest => user2.interests.includes(interest)).length;
    score += commonInterests;
    return score;
  }

  public generateDailyRecommendations(currentUser: UserProfile): UserProfile[] {
    const oppositeGender = currentUser.gender === 'male' ? 'female' : 'male';
    
    const filteredUsers = this.users.filter(user => user.gender === oppositeGender && user.id !== currentUser.id);

    const weightedUsers = filteredUsers.map(user => ({
      ...user,
      weight: this.getSimilarityScore(currentUser, user),
    })).sort((a, b) => b.weight - a.weight);

    const shuffledUsers = weightedUsers.sort(() => 0.5 - Math.random());
    return shuffledUsers.slice(0, 10);
  }
}
