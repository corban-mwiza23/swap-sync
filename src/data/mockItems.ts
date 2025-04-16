import { Item } from "@/data/mockItems";

export interface Item {
  id: string;
  title: string;
  description: string;
  category: string;
  owner: {
    id: string;
    name: string;
    avatar: string;
    rating: number;
  };
  imageUrl: string;
  condition: 'New' | 'Like New' | 'Good' | 'Fair' | 'Well-Loved';
  availability: 'Available' | 'Borrowed' | 'Reserved';
  location: string;
  timeframe: string;
}

export const mockItems: Item[] = [
  {
    id: '1',
    title: 'Power Drill',
    description: 'Professional grade power drill, barely used. Perfect for home projects.',
    category: 'Tools',
    owner: {
      id: 'user1',
      name: 'Emily Chen',
      avatar: 'https://i.pravatar.cc/150?img=1',
      rating: 4.8
    },
    imageUrl: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&auto=format&fit=crop&q=80',
    condition: 'Like New',
    availability: 'Available',
    location: 'Oak Street',
    timeframe: 'Up to 1 week'
  },
  {
    id: '2',
    title: 'Hiking Backpack',
    description: 'Spacious 60L hiking backpack, perfect for weekend trips.',
    category: 'Outdoor',
    owner: {
      id: 'user2',
      name: 'Marcus Johnson',
      avatar: 'https://i.pravatar.cc/150?img=2',
      rating: 4.5
    },
    imageUrl: 'https://images.unsplash.com/photo-1622260614153-03223fb72052?w=400&auto=format&fit=crop&q=80',
    condition: 'Good',
    availability: 'Available',
    location: 'Maple Avenue',
    timeframe: 'Up to 2 weeks'
  },
  {
    id: '3',
    title: 'Electric Lawn Mower',
    description: 'Eco-friendly electric lawn mower, perfect for small to medium lawns.',
    category: 'Garden',
    owner: {
      id: 'user3',
      name: 'Sarah Williams',
      avatar: 'https://i.pravatar.cc/150?img=10',
      rating: 4.9
    },
    imageUrl: 'https://images.unsplash.com/photo-1505705694460-e36d1408be32?w=400&auto=format&fit=crop&q=80',
    condition: 'Good',
    availability: 'Available',
    location: 'Oak Street',
    timeframe: 'Weekends only'
  },
  {
    id: '4',
    title: 'Stand Mixer',
    description: 'Professional kitchen stand mixer, perfect for baking enthusiasts.',
    category: 'Kitchen',
    owner: {
      id: 'user4',
      name: 'Maria G.',
      avatar: 'https://i.pravatar.cc/150?img=9',
      rating: 4.7
    },
    imageUrl: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400&auto=format&fit=crop&q=80',
    condition: 'Like New',
    availability: 'Available',
    location: 'Oak Street',
    timeframe: 'Up to 1 week'
  },
  {
    id: '5',
    title: 'Camping Tent',
    description: '4-person camping tent, waterproof and easy to set up.',
    category: 'Outdoor',
    owner: {
      id: 'user5',
      name: 'Anna Kim',
      avatar: 'https://i.pravatar.cc/150?img=5',
      rating: 4.6
    },
    imageUrl: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=400&auto=format&fit=crop&q=80',
    condition: 'Good',
    availability: 'Borrowed',
    location: 'Birch Street',
    timeframe: 'Available after June 15'
  },
  {
    id: '6',
    title: 'Pressure Washer',
    description: 'High-pressure washer, perfect for cleaning driveways and patios.',
    category: 'Garden',
    owner: {
      id: 'user6',
      name: 'Michael Thompson',
      avatar: 'https://i.pravatar.cc/150?img=6',
      rating: 4.4
    },
    imageUrl: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&auto=format&fit=crop&q=80',
    condition: 'Good',
    availability: 'Available',
    location: 'Walnut Drive',
    timeframe: 'Weekends only'
  }
];

export const categories = [
  'All',
  'Tools',
  'Garden',
  'Kitchen',
  'Outdoor',
  'Electronics',
  'Books',
  'Sports',
  'Kids',
  'Other'
];
