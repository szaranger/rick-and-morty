export type Character = {
  id: string;
  image: string;
  name: string;
  species: string;
  status: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  episode: {
    name: string;
  }[];
}; 