export type MovieId = string;

export interface Cinema {
  id: string;
  name: string;
  movieIds: MovieId[];
}