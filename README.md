# Tinder Clone

## Details

This Tinder clone highlights the recommendation feature often displayed in Tinder.

### Recommendation logic

The recommendation system prioritizes users based on their university and interests while incorporating some randomness to ensure variety. The primary steps in the recommendation algorithm are as follows:

- Filter Users: Filter out the current user from the list of all users.
- Calculate Similarity Scores: Calculate a similarity score for each user based on the following criteria:
	- University: Users from the same university receive a higher score.
	- Interests: Users with common interests receive additional points.
- Sort Users: Sort users by their similarity scores in descending order.
- Introduce Randomness: Shuffle the sorted list to add an element of randomness.
- Select Top 10 Users: Select the top 10 users from the shuffled list as the daily recommendations.

## UML diagrams

Since UserProfile is technically a TypeScript interface, we can let its attribute be public.

```
+-----------------------+                      +-------------------------------------------------------------------------+
|      UserProfile      |                      |                           Recommendation                                |
+-----------------------+                      +-------------------------------------------------------------------------+
| + id: number          |                      | - users: UserProfile[]                                                  |
| + name: string        |                      +-------------------------------------------------------------------------+
| + gender: string      |                      | + generateDailyRecommendations(currentUser: UserProfile): UserProfile[] |
| + location: string    |                      | - getSimilarityScore(user1: UserProfile, user2: UserProfile): number    |
| + university: string  |                      +-------------------------------------------------------------------------+
| + interests: string[] |
| + imageUrls: string[] |
+-----------------------+
```

## How to Run

Simply run `npm install` and then `npm start`!
