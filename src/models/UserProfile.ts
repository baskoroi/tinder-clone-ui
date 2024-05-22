export type Gender = 'male' | 'female';

export interface UserProfile {
  id: number;
  name: string;
  gender: Gender;
  location: string;
  university: string;
  interests: string[];
  imageUrls: string[];
}

export const mockUserProfiles: UserProfile[] = [
  // Male profiles
  {
    id: 1,
    name: "John Doe",
    gender: "male",
    location: "New York",
    university: "NYU",
    interests: ["coding", "reading"],
    imageUrls: [
      "https://via.placeholder.com/480x600?text=John+Doe+1",
      "https://via.placeholder.com/480x600?text=John+Doe+2",
      "https://via.placeholder.com/480x600?text=John+Doe+3"
    ]
  },
  {
    id: 2,
    name: "Michael Smith",
    gender: "male",
    location: "Los Angeles",
    university: "UCLA",
    interests: ["sports", "music"],
    imageUrls: [
      "https://via.placeholder.com/480x600?text=Michael+Smith+1",
      "https://via.placeholder.com/480x600?text=Michael+Smith+2",
      "https://via.placeholder.com/480x600?text=Michael+Smith+3"
    ]
  },
  {
    id: 3,
    name: "David Johnson",
    gender: "male",
    location: "Chicago",
    university: "University of Chicago",
    interests: ["traveling", "cooking"],
    imageUrls: [
      "https://via.placeholder.com/480x600?text=David+Johnson+1",
      "https://via.placeholder.com/480x600?text=David+Johnson+2",
      "https://via.placeholder.com/480x600?text=David+Johnson+3"
    ]
  },
  {
    id: 4,
    name: "James Brown",
    gender: "male",
    location: "Houston",
    university: "Rice University",
    interests: ["gaming", "movies"],
    imageUrls: [
      "https://via.placeholder.com/480x600?text=James+Brown+1",
      "https://via.placeholder.com/480x600?text=James+Brown+2",
      "https://via.placeholder.com/480x600?text=James+Brown+3"
    ]
  },
  {
    id: 5,
    name: "Robert Williams",
    gender: "male",
    location: "Phoenix",
    university: "ASU",
    interests: ["hiking", "photography"],
    imageUrls: [
      "https://via.placeholder.com/480x600?text=Robert+Williams+1",
      "https://via.placeholder.com/480x600?text=Robert+Williams+2",
      "https://via.placeholder.com/480x600?text=Robert+Williams+3"
    ]
  },
  {
    id: 6,
    name: "William Jones",
    gender: "male",
    location: "San Francisco",
    university: "Stanford",
    interests: ["writing", "tech"],
    imageUrls: [
      "https://via.placeholder.com/480x600?text=William+Jones+1",
      "https://via.placeholder.com/480x600?text=William+Jones+2",
      "https://via.placeholder.com/480x600?text=William+Jones+3"
    ]
  },
  {
    id: 7,
    name: "Charles Garcia",
    gender: "male",
    location: "Miami",
    university: "University of Miami",
    interests: ["fitness", "yoga"],
    imageUrls: [
      "https://via.placeholder.com/480x600?text=Charles+Garcia+1",
      "https://via.placeholder.com/480x600?text=Charles+Garcia+2",
      "https://via.placeholder.com/480x600?text=Charles+Garcia+3"
    ]
  },
  {
    id: 8,
    name: "Joseph Martinez",
    gender: "male",
    location: "Dallas",
    university: "SMU",
    interests: ["fashion", "traveling"],
    imageUrls: [
      "https://via.placeholder.com/480x600?text=Joseph+Martinez+1",
      "https://via.placeholder.com/480x600?text=Joseph+Martinez+2",
      "https://via.placeholder.com/480x600?text=Joseph+Martinez+3"
    ]
  },
  {
    id: 9,
    name: "Thomas Rodriguez",
    gender: "male",
    location: "Seattle",
    university: "University of Washington",
    interests: ["coding", "gaming"],
    imageUrls: [
      "https://via.placeholder.com/480x600?text=Thomas+Rodriguez+1",
      "https://via.placeholder.com/480x600?text=Thomas+Rodriguez+2",
      "https://via.placeholder.com/480x600?text=Thomas+Rodriguez+3"
    ]
  },
  {
    id: 10,
    name: "Christopher Anderson",
    gender: "male",
    location: "Denver",
    university: "CU Boulder",
    interests: ["reading", "photography"],
    imageUrls: [
      "https://via.placeholder.com/480x600?text=Christopher+Anderson+1",
      "https://via.placeholder.com/480x600?text=Christopher+Anderson+2",
      "https://via.placeholder.com/480x600?text=Christopher+Anderson+3"
    ]
  },
  // Female profiles
  {
    id: 11,
    name: "Jane Smith",
    gender: "female",
    location: "Boston",
    university: "Harvard",
    interests: ["music", "art"],
    imageUrls: [
      "https://via.placeholder.com/480x600?text=Jane+Smith+1",
      "https://via.placeholder.com/480x600?text=Jane+Smith+2",
      "https://via.placeholder.com/480x600?text=Jane+Smith+3"
    ]
  },
  {
    id: 12,
    name: "Emily Johnson",
    gender: "female",
    location: "San Francisco",
    university: "Stanford",
    interests: ["writing", "tech"],
    imageUrls: [
      "https://via.placeholder.com/480x600?text=Emily+Johnson+1",
      "https://via.placeholder.com/480x600?text=Emily+Johnson+2",
      "https://via.placeholder.com/480x600?text=Emily+Johnson+3"
    ]
  },
  {
    id: 13,
    name: "Sarah Davis",
    gender: "female",
    location: "Miami",
    university: "University of Miami",
    interests: ["fitness", "yoga"],
    imageUrls: [
      "https://via.placeholder.com/480x600?text=Sarah+Davis+1",
      "https://via.placeholder.com/480x600?text=Sarah+Davis+2",
      "https://via.placeholder.com/480x600?text=Sarah+Davis+3"
    ]
  },
  {
    id: 14,
    name: "Jessica Garcia",
    gender: "female",
    location: "Dallas",
    university: "SMU",
    interests: ["fashion", "traveling"],
    imageUrls: [
      "https://via.placeholder.com/480x600?text=Jessica+Garcia+1",
      "https://via.placeholder.com/480x600?text=Jessica+Garcia+2",
      "https://via.placeholder.com/480x600?text=Jessica+Garcia+3"
    ]
  },
  {
    id: 15,
    name: "Karen Martinez",
    gender: "female",
    location: "Seattle",
    university: "University of Washington",
    interests: ["coding", "gaming"],
    imageUrls: [
      "https://via.placeholder.com/480x600?text=Karen+Martinez+1",
      "https://via.placeholder.com/480x600?text=Karen+Martinez+2",
      "https://via.placeholder.com/480x600?text=Karen+Martinez+3"
    ]
  },
  {
    id: 16,
    name: "Nancy Anderson",
    gender: "female",
    location: "Denver",
    university: "CU Boulder",
    interests: ["reading", "photography"],
    imageUrls: [
      "https://via.placeholder.com/480x600?text=Nancy+Anderson+1",
      "https://via.placeholder.com/480x600?text=Nancy+Anderson+2",
      "https://via.placeholder.com/480x600?text=Nancy+Anderson+3"
    ]
  },
  {
    id: 17,
    name: "Elizabeth Thomas",
    gender: "female",
    location: "San Diego",
    university: "UCSD",
    interests: ["beach", "surfing"],
    imageUrls: [
      "https://via.placeholder.com/480x600?text=Elizabeth+Thomas+1",
      "https://via.placeholder.com/480x600?text=Elizabeth+Thomas+2",
      "https://via.placeholder.com/480x600?text=Elizabeth+Thomas+3"
    ]
  },
  {
    id: 18,
    name: "Mary Jackson",
    gender: "female",
    location: "Las Vegas",
    university: "UNLV",
    interests: ["partying", "dancing"],
    imageUrls: [
      "https://via.placeholder.com/480x600?text=Mary+Jackson+1",
      "https://via.placeholder.com/480x600?text=Mary+Jackson+2",
      "https://via.placeholder.com/480x600?text=Mary+Jackson+3"
    ]
  },
  {
    id: 19,
    name: "Jennifer White",
    gender: "female",
    location: "Portland",
    university: "Portland State University",
    interests: ["cooking", "baking"],
    imageUrls: [
      "https://via.placeholder.com/480x600?text=Jennifer+White+1",
      "https://via.placeholder.com/480x600?text=Jennifer+White+2",
      "https://via.placeholder.com/480x600?text=Jennifer+White+3"
    ]
  },
  {
    id: 20,
    name: "Patricia Harris",
    gender: "female",
    location: "Atlanta",
    university: "Georgia Tech",
    interests: ["technology", "robotics"],
    imageUrls: [
      "https://via.placeholder.com/480x600?text=Patricia+Harris+1",
      "https://via.placeholder.com/480x600?text=Patricia+Harris+2",
      "https://via.placeholder.com/480x600?text=Patricia+Harris+3"
    ]
  }
];
