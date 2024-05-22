// Recommendation.ts
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
    const weightedUsers = this.users.map(user => ({
      user,
      score: this.getSimilarityScore(currentUser, user),
    }));
    
    weightedUsers.sort((a, b) => b.score - a.score);

    const recommendations = weightedUsers.slice(0, 10).map(item => item.user);
    
    // Add some randomness
    return recommendations.sort(() => 0.5 - Math.random()).slice(0, 10);
  }
}
