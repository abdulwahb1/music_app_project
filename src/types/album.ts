export type Track = {
  title: string;
  duration: string; // e.g., "3:45"
  featuring?: string[]; // Optional for featured artists
  rating: string; // Updated to be between 0 and 5
};

export type Album = {
  id: number;
  title: string;
  artist: string;
  cover: string;
  rating: string;
  avgRating: string;
  yourRating: string;
  albumTracks: string;
  releaseDate: string;
  duration: number;
  label: string;
  explicit: boolean;
  genres: string[];
  trackCount: string;
  tracks: Track[]; // Added tracks
};
